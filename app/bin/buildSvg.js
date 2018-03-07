const _ = require('lodash')
const path = require('path')
const fs = require('mz/fs')
const svgpath = require('svgpath')
const svg_image_flatten = require('../lib/_svg_image_flatten')

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
function import_svg_image(data, file) {
  let res = svg_image_flatten(data)
  console.log('测试', res)
  let scale = 1000 / res.height
  let d = new svgpath(res.d)
            .translate(0, 0)
            // .scale(scale)
            .rotate(180)
            .abs()
            .round(1)
            .toString()
  let width = Math.round(res.width * scale)
  return {
    css: 'test',
    code:'e601',
    charRef: 'e601',
    d,
    width,
    svg: {
      path: d,
      width
    }
  }
}

module.exports = function(data = {}) {
  var conf             = {};
  conf.font            = {};
  conf.font.fontname   = data.fontname || 'cmsui-font';
  conf.font.familyname = data.fontname || 'cmsui-font';
  conf.font.ascent = 850
  conf.font.descent = -150
  let glyph = import_svg_image(data)
  conf.glyphs = [glyph]
  console.log('——————开始构建——————')
  console.log(svgFontTemplate(conf))
  console.log('——————结束构建——————')
  return (svgFontTemplate(conf))
}