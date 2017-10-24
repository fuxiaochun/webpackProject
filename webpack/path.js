const path = require('path');
const fs = require('fs');

const join = path.join;

const base = process.cwd();
const dist = join(base,'dist');
const src = join(base,'src');
const css = join(src,'css');
const js = join(src,'js');
const imgs = join(src,'imgs');
const fonts = join(src,'fonts');

const map = {
	base,
	dist,
	src,
	css,
	imgs,
	fonts,
	js
};

const jsDirs = ['component','io','page','util','vendor','plugin'];

jsDirs.map((dir)=>{
	map[dir] = join(js,dir);
});

module.exports = map;
