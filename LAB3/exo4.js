const fs = require('fs');
const [,,file,text] = process.argv;
if (text) {
  const fn = file || 'f.txt';
  fs.writeFileSync(fn, text);
  console.log('The file has been saved!');
} 
