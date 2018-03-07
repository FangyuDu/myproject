const zlib = require('mz/zlib')
const mkdirp = require('mkdirp')
const fs = require('fs')
const path = require('path')
const fontBuild = require('../model/font_build')
const JSZip = require('jszip')
const checkFonts = require('../model/checkFonts')
const scanFonts = require('../model/checkClass.js')
const {getAllFonts} = require('../model/getFont')
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

exports.scanFonts = async ctx => {
  ctx.body = scanFonts(ctx)
}

// 获取所有图标
exports.getAllFonts = async ctx => {
  ctx.body = getAllFonts(ctx)
}
// 打包
exports.zipFonts = async ctx => {
  ctx.body = {
    success: true,
    message: '打包成功'
  }
}