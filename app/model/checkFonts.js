const _ = require('lodash')
const path = require('path')
const fs = require('mz/fs')
const svgpath = require('svgpath')

const svgFontTemplate = _.template(
  '<?xml version="1.0" standalone="no"?>\n' +
  '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n' +
  '<svg xmlns="http://www.w3.org/2000/svg">\n' +
  '<defs>\n' +
  '<font id="_${font.fontname}" horiz-adv-x="${font.ascent - font.descent}" >\n' +
  '<font-face' +
  ' font-family="${font.familyname}"' +
  ' font-weight="400"' +
  ' font-stretch="normal"' +
  ' units-per-em="${font.ascent - font.descent}"' +
  ' ascent="${font.ascent}"' +
  ' descent="${font.descent}"' +
  ' />\n' +

  '<missing-glyph horiz-adv-x="${font.ascent - font.descent}" />\n' +

  '<% glyphs.forEach(function(glyph) { %>' +
    '<glyph' +
    ' glyph-name="${glyph.css}"' +
    ' unicode="&#x${glyph.code.toString(16)};"' +
    ' d="${glyph.d}"' +
    ' horiz-adv-x="${glyph.width}"' +
    ' />\n' +
  '<% }); %>' +

  '</font>\n' +
  '</defs>\n' +
  '</svg>')
module.exports = function(data = {}) {
  var conf             = {};
  conf.font            = {};
  conf.font.fontname   = data.fontname || 'cmsui-font';
  conf.font.familyname = data.fontname || 'cmsui-font';
  conf.font.ascent = 850
  conf.font.descent = -150
  conf.glyphs = data.glyphs || [{
    css: 'test',
    code: 'e601',
    d: 'M501 809c-253 0-458-205-458-458 0-253 205-458 458-458s459 205 459 458c0 253-206 458-459 458z m0-855c-219 0-397 178-397 397s178 397 397 397 398-177 398-397-178-397-398-397z m-233 211h213v137h-175v37h175v109h-193v36h425v-36h-191v-109h175v-37h-175v-137h212v-36h-466v36z m195 389l35 19c20-29 33-52 42-68l-38-20c-17 32-30 55-39 69z',
    width: '1000'
  }, {
    css: 'test2',
    code: 'e602',
    d: 'M503 809c-253 0-458-205-458-458 0-253 205-458 458-458s459 205 459 458c0 253-206 458-459 458z m0-855c-219 0-397 178-397 397s178 397 397 397 398-177 398-397-178-397-398-397z m-233 211h213v137h-175v37h175v109h-193v36h425v-36h-191v-109h175v-37h-175v-137h212v-36h-466v36z m195 389l35 19c20-29 33-52 42-68l-38-20c-17 32-30 55-39 69z',
    width: '1000'
  }]
  console.log('——————开始构建——————')
  console.log(svgFontTemplate(conf))
  console.log('——————结束构建——————')
  return (svgFontTemplate(conf))
}