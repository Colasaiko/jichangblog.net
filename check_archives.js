const fs = require('fs');
const html = fs.readFileSync('archives/index.html', 'utf8');
const match = html.match(/class="archive-year">.*?<\/a>/g);
if (match) console.log(match);
