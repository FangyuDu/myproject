const zlib = require('mz/zlib')
const mkdirp = require('mkdirp')
const fs = require('fs')
const path = require('path')

exports.fontDownload = async ctx => {
  let p = path.join(ctx.app.baseDir, 'fonts', 'fontello.svg')
  console.log(fs.readdirSync(p))
  ctx.body = 'test'
}
