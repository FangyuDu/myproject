const svgpath   = require('svgpath')
const fs        = require('mz/fs')
const path      = require('path')
const Domparser = require('xmldom').DOMParser;
const checkFonts = require('../app/model/checkFonts')

let $ = new Domparser()
let file = fs.readFileSync(path.join('.', 'fonts/我的', '个人信息不整.svg'), 'utf8')
let doc = $.parseFromString(file, 'application/xml')
let domPath = doc.getElementsByTagName('path')[0]
let cfg = {
  glyphs: []
}
var transformed = new svgpath(domPath.getAttribute('d'))
                    .scale(1)
                    .rel()
                    .round(1)
                    .toString()
let glyph = {
    css: 'test',
    code: 'e601',
    d: transformed,
    width: '1000'
  }
cfg.glyphs.push(glyph)
console.log('测试开始')
let str = checkFonts(cfg)
fs.writeFileSync('test.svg', str)
console.log(str)
console.log('测试结束')