var fs = require('fs');

fs.rename('index.html', 'inicio.html', function(err){
    if(err) throw err;
    console.log("Renombrado con exito!");
});