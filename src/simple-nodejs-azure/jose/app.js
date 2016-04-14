var app = function () {
    var self = {};
    
    self.nombre = function () {
        return "Jose A. Fernandez";
    }

    self.items = function (cantidad) {
        
        var miLista = '<ul>';
        
        for (i = 1; i <= cantidad; i++) {
            miLista += '<li> J ' + i + '</li>';
        }
        
        miLista += '</ul>';
        return miLista;
    }
    
    
    self.opciones = function (cantidad) {
        
        var miLista = '<ul>';
        miLista += '<form action="" method="get">';

        for (i = 1; i <= cantidad; i++) {
            miLista += '<li>';
            miLista += '<input type="radio" name="cantidad" value="' + i + '" /> ';
            miLista += 'Respuesta ' + i;
            miLista += '</li>';
        }
        
        miLista += '</form>';
        miLista += '</ul>';

        return miLista;
    }
    
    self.preguntaArmar = function (id) {
        
       

        var pregunta = {
            id:1,
            descripcion : '¿Qué famoso actor de Hollywood dijo las siguiente frase?: Volveré... (I´ll be back)',
            respuestas : [
                {
                    id: 1,
                    descripcion: 'Mel Gibson en Arma Letal'
                },
                {
                    id: 2,
                    descripcion: 'Arnold Schwarzenegger en Terminator'
                },
                {
                    id: 3,
                    descripcion: 'Bruce Willis en Duro de Matar'
                },
            ]
        };
        
        var html = '';
        html += '<div class="row">';

        //titulo
        html += '<div class="col-md-12 pregunta-titulo">';
        html += '<h2>';
        html += pregunta.descripcion;
        html += '</h2>';
        html += '</div>'; //fin de pregunta-titulo

      
       
        
        //respuestas
        html += '<div class="col-md-offset-3 col-md-6 pregunta-respuestas">';
        
        html += '<form action="" method="get">';
        for (i = 0; i < pregunta.respuestas.length; i++) {
            var r = pregunta.respuestas[i];
            html += '';
            html += '<input type="button" class="btn btn-primary col-md-12 col-xs-12 " value="'+ r.descripcion +'" />';
            html += '';
        }
        html += '</form>';
        html += '</div>'; //fin de pregunta-respuestas

       
        html += '</div>'; //fin de row
        
        
        return html;
    }
    
    return self;
}();

module.exports = app;