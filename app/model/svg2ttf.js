const fs = require('fs')
const svg2ttf = require('svg2ttf')

const reform = function (from, to) {
  let ttf = svg2ttf(fs.readFileSync(from, 'utf-8'), {}).buffer
  fs.writeFileSync(to, new Buffer(ttf))
  console.log('已转换成功')
}

module.exports = reform