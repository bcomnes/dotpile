var os = require('os')
var username = require('username')
var map = require('map-async')
var fs = require('fs')
var path = require('path')

var facts = {
  homedir: os.homedir(),
  hostname: os.hostname(),
  username: username.sync(),
  platform: os.platform(),
  type: os.type(),
  release: os.release()
}

var dotfiles = [
  '.bash_profile',
  '.bashrc',
  '.profile'
]

map(dotfiles, function eachFile (filename, cb) {
  var fullPath = path.join(facts.homedir, filename)
  fs.stat(fullPath, function statFile (err, stats) {
    if (err) return cb(null, err)
    cb(null, stats.isFile())
  })
}, function logRes (err, result) {
  console.log(err || result)
})
