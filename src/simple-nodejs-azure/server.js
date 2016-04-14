var http = require('http');
var url = require("url");
var port = process.env.port || 1337;


http.createServer(function (req, res) {
    
    var urlParseada = url.parse(req.url, true);

    //Listado de variables en querystring
    for (q in urlParseada['query']) {
        console.log(q + " = " + urlParseada['query'][q]);
    }
    
    var cantidadItems = urlParseada['query'].cantidad || 1;


    //Verificar request
    var posicionBarra = req.url.toString().indexOf('/', 1);
    var carpeta = req.url.toString().substring(1, posicionBarra);

    console.log(carpeta); 
    
    if (carpeta.length > 3) {
        var app = require('./' + carpeta + '/app.js');
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        
        res.write('<!DOCTYPE html>');
        res.write('<html>');
        res.write('<head>');
        res.write('<meta name=viewport content="width=device-width,initial-scale=1">');
        res.write('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">');
        res.write('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">');
        res.write('</head>');
        res.write('<body>');
        res.write('<div class="container-fluid">');
        res.write('<h1>');
        res.write('Carpeta: ' + carpeta);
        res.write('<br />');
        res.write('Nombre: ' + app.nombre());
        res.write('</h1>');

        res.write(app.preguntaArmar(1));

        res.write('</div>');  //div container-fluid
        res.write('<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>');
        res.write('</body>');
        res.end('</html>');
        
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h1>');
        res.write('Carpeta no encontrada!');
        res.end('</h1>');
    }
    
    
    
}).listen(port);

