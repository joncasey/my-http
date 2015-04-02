
var http = require('http')
var https = require('https')

module.exports = function read(url, fn) {

  var text = ''
  var mod = (/^https:/.test(url) ? https : http)

  mod.get(url, function (res) {

    res.on('data', function (chunk) {
      text += chunk
    })

    res.on('end', function () {
      fn(text, url)
    })

  }).on('error', function (err) {
    console.error(err)
  })

}

