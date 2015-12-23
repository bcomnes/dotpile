var os = require('os')
var username = require('username')
var map = require('map-async')
var fs = require('fs')
var path = require('path')
var series = require('run-series')
var truthy = require('@bret/truthy')
var bash = require('./bash')

var facts = {
  homedir: os.homedir(),
  hostname: os.hostname(),
  username: username.sync(),
  platform: os.platform(),
  type: os.type(),
  release: os.release()
}

var defaults = {
  dotfiles: [
    '.bash_profile',
    '.bashrc',
    '.profile'
  ],
  dotpile: '.dotpile.d'
}

var options = Object.assign({}, defaults)

function gatherFacts (opts) {
}

function statFile (filename, cb) {
  var fullPath = path.join(options.homedir, filename)
  fs.lstat(fullPath, function withStats (err, stats) {
    if (err && err.code !== 'ENOENT') return cb(err)
    var results = {
      filename: filename,
      exists: truthy(stats),
      stats: stats || null
    }
    cb(null, results)
  })
}

function logRes (err, result) {
  console.log(err || result)
}

map(defaults.dotfiles, statFile, logRes)
