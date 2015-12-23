var path = require('path')

// Expose path of bash file templates
exports.bashrc = path.join(__dirname, 'bashrc.sh')
exports.bashProfile = path.join(__dirname, 'bash_profile.sh')
