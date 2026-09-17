const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const match = html.match(/href="\/202[456][^"]+"/g);
if (match) console.log(match.slice(0, 10));
