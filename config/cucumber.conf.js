const { Before, BeforeAll, AfterAll, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const stripAnsi = require('strip-ansi').default;
const videoDir = path.join(__dirname, '..', 'reports', 'videos');

// Set default timeout for each step
setDefaultTimeout(60 * 1000);

const config = require('./env.config')[process.env.NODE_ENV || 'test'];

BeforeAll(async function () {
  global.browser = await chromium.launch({
    headless: false,
    slowMo: 500,
    args: ['--window-size=2560,1440']
  });
});

Before(async function () {
  // ✅ Make sure the videos folder exists
  if (!fs.existsSync(videoDir)) {
    fs.mkdirSync(videoDir, { recursive: true });
  }

  global.context = await global.browser.newContext({
    viewport: null,
    baseURL: config.baseUrl,
    // 👇 this is the important part
    recordVideo: {
      dir: videoDir,
      size: { width: 1280, height: 720 }  // optional, set resolution if you want
    }
  });

  global.page = await global.context.newPage();
});

After(async function (scenario) {
  // Handle failures (screenshot + error)
  if (scenario.result?.status === 'FAILED') {
    // 📸 Screenshot
    const screenshotBuffer = await global.page.screenshot();
    await this.attach(screenshotBuffer, 'image/png');

    // 📝 Error message
    if (scenario.result.message) {
      const cleanError = stripAnsi(scenario.result.message);
      const htmlError = `<pre style="color: red;">${cleanError}</pre>`;
      await this.attach(htmlError, 'text/html');
    }

    // 📽 Save video only for failed scenarios
    const video = await global.page.video();
    if (video) {
      const videoPath = await video.path();
      const scenarioName = scenario.pickle.name.replace(/[^a-z0-9]/gi, '_').toLowerCase();
      const newVideoPath = path.join(path.dirname(videoPath), `${scenarioName}.webm`);
      fs.renameSync(videoPath, newVideoPath);

      const relativePath = path.relative(path.join(__dirname, '..'), newVideoPath);
      await this.attach(`Video recorded: ${relativePath}`, 'text/plain');
    }
  }

  // ✅ If passed, video will be auto-deleted by Playwright (no action needed)
  await global.page.close();
  await global.context.close();
});


AfterAll(async function () {
  await global.browser.close();
});