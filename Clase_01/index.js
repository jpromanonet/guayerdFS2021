var http = require('http');
var port = 9004

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('El servidor esta corriendo en el puerto ' + port);
    res.end('Hola Guayerd!');
}).listen(port);

console.log("Tu servidor esta funcionando en el puerto " + port);