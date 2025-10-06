require('./cleanCucumberJson'); 

const reporter = require('cucumber-html-reporter');
const path = require('path');
const fs = require('fs');

const reportPath = path.resolve(__dirname, 'reports', 'cucumber_report.html');

const options = {
  theme: 'bootstrap',
  jsonFile: 'reports/cucumber_report.json',
  output: reportPath,
  screenshotsDirectory: 'reports/screenshots',
  storeScreenshots: true,
  reportSuiteAsScenarios: true,
  metadata: {
    "Test Environment": "TEST",
    "Browser": "Chromium",
    "Platform": process.platform,
    "Executed": "Local"
  }
};

reporter.generate(options);

// Open the report in default browser
(async () => {
  try {
    const open = (await import('open')).default;
    if (fs.existsSync(reportPath)) {
      await open(reportPath);
    }
  } catch (err) {
    console.error('❌ Failed to open report:', err.message);
  }
})();
