var fs = require('fs');
var http = require('http');

fs.appendFile('index.html', "<h1>Hola mundo!</h1>", function(err){
    if (err) throw err;
    console.log("Archivo creado con exito!");
})

http.createServer(function(req, res) {
    fs.readFile('index.html', function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8081);