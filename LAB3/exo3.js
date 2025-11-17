    const fs = require('fs');
    if (process.argv.length < 3) {
        console.error('Usage: node exo3.js <filename>');
        process.exit(1);
    }

    const filename = process.argv[2];

    const content = fs.readFileSync(filename, 'utf8');
    console.log(content);
