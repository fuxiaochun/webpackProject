const fs = require('fs');
const path = require('path');
const pagePath = require('./path.js').page;

let entrys = {
	vendor: ['jquery']
};

let pages = fs.readdirSync(pagePath);
pages.forEach((dir)=>{
	entrys[dir] = path.join(pagePath,dir,'index.js');
});

module.exports = entrys;