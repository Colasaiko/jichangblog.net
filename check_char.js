const fs = require('fs');
const html = fs.readFileSync('categories/index.html', 'utf8');
const match = html.match(/2024年教./g);
console.log(match);
