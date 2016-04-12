var app = function () {
    var self = {};
    
    self.nombre = function () {
        return "Enzo Medina";
    }
    
    self.items = function (cantidad) {
        var unaLista = '<ul>';
        var unForm = '<form action="/enzo/demo.html" method="get">';
        for (var i = 1; i <= cantidad; i++) {
            unaLista = unaLista + '<li>Item' + i + ' </li>' + unForm + '<input type="submit" name="cantidad" value="' + i + '">';
        };
        unForm += '</form>';        
        unaLista += '</ul>';
        
        return unaLista;
    }
    
    

    self.opciones = function (cantidad) {
        var unaLista = '<ul>';
        unaLista += '<form action="" method="get">';
        for (var i = 1; i <= cantidad; i++) {
            unaLista += '<li>'+'<input type="radio" name="cantidad" value="' + i + '"/> ';
            unaLista += 'Respuesta ' + i + ' </li>';
        };
        unaLista += '</form>';
        unaLista += '</ul>';
        
        return unaLista;
    }
    
    return self;
    
}();

module.exports = app;