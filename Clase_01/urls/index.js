// URL = unified remote link

// Llamar a los modulos externos
const { read } = require('fs');
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(req.url);
    res.end()
}).listen(9999);