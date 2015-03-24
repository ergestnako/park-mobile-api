var multer = require('multer');

module.exports = multer({
  dest: './uploads/',
  rename: function(fieldname, filename) {
    return filename.replace(/\W+/g, ' - ').toLowerCase() + Date.now();
  },
  onFileUploadComplete: function(file) {
    console.log(file.originalname + 'uploaded to ' + file.path);
  }
});
