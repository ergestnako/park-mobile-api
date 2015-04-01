  var imageMulter = require('./imageMulter'),
    processImage = require('./processImage');

  module.exports = function(config) {
    return [{
      'name': 'GET index',
      'description': 'Returns a simple HTML document that works as an example to this interface',
      'method': 'GET',
      'path': '/',
      'process': function(req, res) {
        console.log(__dirname, config.htmlRoot);
        res.sendFile(config.htmlDirectory + '/index.html');
      }
    }, {
      'name': 'GET update park json',
      'description': 'Returns json describing if the latest updates are correct',
      'method': 'GET',
      'path': '/update/:unitCode',
      'process': function(req, res) {
        // TODO: Move the park script here
        return ([req, res]);
      }
    }, {
      'name': 'POST image',
      'description': 'Accepts an image file, resizes it, uploads it to a server, Returns image Id',
      'method': 'POST',
      'path': '/image',
      'process': [imageMulter, processImage]
    }, {
      'name': 'PUT image',
      'description': 'Same as POST image, but updates an existing image',
      'method': 'PUT',
      'path': '/image/:imageId',
      'process': [imageMulter, processImage]
    }, {
      'name': 'DELETE image',
      'description': 'Removes an image from the server',
      'method': 'DELETE',
      'path': '/image/:imageId',
      'process': function(req, res) {
        // TODO?
        return ([req, res]);
      }
    }];
  };
