     // exo3.js
     const fs = require('fs');

     // Check if a filename was provided as a command-line argument
     if (process.argv.length < 3) {
       console.error('Usage: node exo3.js <filename>');
       process.exit(1);
     }

     // Get the filename from the command line (e.g., test.txt)
     const filename = process.argv[2];

     
       // Read the file synchronously and output its contents
       const content = fs.readFileSync(filename, 'utf8');
       console.log(content);
     
     