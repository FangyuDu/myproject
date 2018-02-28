const path = require('path')
const glob = require('glob').sync

function scanFonts(ctx) {
  let tempArr = []
  glob('*/', {
    cwd: path.join(ctx.app.baseDir, 'fonts')
  })
    .forEach(item => {
      let dirName = item.replace('/', '')
      let tempObj = {}
      tempObj.name = dirName
      tempObj.list = []
      glob('*.svg', {
        cwd: path.join(ctx.app.baseDir, 'fonts', dirName)
      }).forEach(svg => {
        tempObj.list.push(svg)
      })
      tempArr.push(tempObj)
    })
  return tempArr
}

module.exports = scanFonts