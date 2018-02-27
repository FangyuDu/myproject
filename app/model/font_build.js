const crypto = require('crypto')
const fontReform = require('./fontReform')
const JSZip = require('jszip')
const path = require('path')
const _ = require('lodash')
const SvgPath = require('svgpath')
const fs = require('fs')
const checkFonts = require('./checkFonts')

function getFontId() {
  let hash = crypto.createHash('md5')
  hash.update(new Date().getTime().toString())
  return hash.digest('hex').substr(0, 8)
}

module.exports = function (ctx) {
  const zip = new JSZip()
  let id = getFontId()
  // 任务配置
  let task = {
    id: id,
    folder: `cmsui-font-${id}`,
    ttf: 'cmsui-font.ttf'
  }
  // 待压缩的文件
  let folder = zip.folder(task.folder)
  // 基础配置文件
  folder.file('config.json', JSON.stringify(task, null, 2))
  // |- ttf 文件
  // let p2 = path.join(ctx.app.baseDir, 'fonts/业务办理', '主卡.svg')
  let p = path.join(ctx.app.baseDir, 'fonts', 'fontello.svg')
  // console.log(fs.readFileSync(p, 'utf-8'))
  let ttf = fontReform(checkFonts())
  folder.file(task.ttf, ttf.buffer)

  // 构建后的对象
  return {
    taskInfo: task,
    build: zip.generateAsync({type : "nodebuffer", compression: 'DEFLATE'})
  }
}