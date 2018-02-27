const zlib = require('mz/zlib')
const mkdirp = require('mkdirp')
const fs = require('fs')
const path = require('path')
const fontBuild = require('../model/font_build')
const JSZip = require('jszip')
const checkFonts = require('../model/checkFonts')

exports.fontDownload = async ctx => {
  let fb = new fontBuild(ctx)
  await fb.build
    .then(z => {
      ctx.attachment(`${fb.taskInfo.folder}.zip`)
      ctx.body = z
    })
}

exports.checkFonts = async ctx => {
  ctx.attachment('test.svg')
  ctx.body = checkFonts()
}
