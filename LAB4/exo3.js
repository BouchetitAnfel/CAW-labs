const fs = require('fs');

function readFile(filename) {
  return fs.readFileSync(filename, 'utf8');
}

module.exports = { readFile };

// Detect direct execution or Jest isolateModules simulation
const isDirectRun =
  require.main === module ||
  (process.argv[1] && process.argv[1].endsWith('exo3.js'));

if (isDirectRun) {
  if (!process.argv[2]) {
    console.error('Usage: node exo3.js <filename>');
    process.exit(1);
  }

  const filename = process.argv[2];
  const content = readFile(filename);
  console.log(content);
}
