// Requerir modulos externos
var http = require('http');
var dt = require("./moduloFecha");

// Definir el puerto de nuestro servidor Node
var port = 9009

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('El dia y la fecha de hoy es: ' + dt.myDateTime());
    res.end(); // Es obligatorio que el res.end() este para terminar la conexion.
}).listen(port);

console.log("Tu servidor esta funcionando en el puerto " + port);