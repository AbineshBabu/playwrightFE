// cleanCucumberJson.js
const fs = require('fs');
const path = require('path');
const stripAnsi = require('strip-ansi').default;


const reportPath = path.join(__dirname, 'reports', 'cucumber_report.json');

if (!fs.existsSync(reportPath)) {
  console.error('❌ Report JSON not found.');
  process.exit(1);
}

const raw = fs.readFileSync(reportPath, 'utf-8');
const json = JSON.parse(raw);

// Recursively remove ANSI codes from all error messages and text fields
function cleanAnsi(obj) {
  if (typeof obj === 'string') return stripAnsi(obj);
  if (Array.isArray(obj)) return obj.map(cleanAnsi);
  if (typeof obj === 'object' && obj !== null) {
    for (const key of Object.keys(obj)) {
      obj[key] = cleanAnsi(obj[key]);
    }
  }
  return obj;
}

const cleaned = cleanAnsi(json);
fs.writeFileSync(reportPath, JSON.stringify(cleaned, null, 2));
console.log('✅ Cleaned ANSI characters from cucumber_report.json');
