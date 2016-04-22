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
            unaLista += '<li>' + '<input type="radio" name="cantidad" value="' + i + '"/> ';
            unaLista += 'Respuesta ' + i + ' </li>';
        };
        unaLista += '</form>';
        unaLista += '</ul>';
        
        return unaLista;
    }
    
    
    self.preguntaArmar = function (id) {
        
        
        
        var preguntas = [
            
            {
                id: 0,
                descripcion : '¿Cual es la capital de Canada?',
                respuestas : [
                    {
                        id: 1,
                        descripcion: 'Belmopan', 
                        esCorrecta: false
                    },
                    {
                        id: 2,
                        descripcion: 'Ottawa',
                        esCorrecta: true
                    },
                    {
                        id: 3,
                        descripcion: 'Varsovia',
                        esCorrecta: false
                    },
                ]
            },
            {
                id: 1,
                descripcion : '¿Cual de estos paises tiene como capital a Caracas?',
                respuestas : [
                    {
                        id: 1,
                        descripcion: 'Brasil',
                        esCorrecta: false
                    },
                    {
                        id: 2,
                        descripcion: 'Venezuela',
                        esCorrecta: true
                    },
                    {
                        id: 3,
                        descripcion: 'Moscu',
                        esCorrecta: false
                    },
                ]
              
            
            }
        ];
        
        
        var pregunta = preguntas[id];
        

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
        
        
      
        
        
        
        for (i = 0; i < pregunta.respuestas.length; i++) {
            var r = pregunta.respuestas[i];

            html += '<form action="/enzo/demo.html" method="get">';
            html += '<input type="hidden"name="preguntaId"value="' + pregunta.id + '"/>';
            html += '<input type="submit" '+ ColorBtn +' col-md-12 col-xs-12"value="' + r.descripcion + '"/>';
            html += '<input type="hidden"name="respuestaId"value="' + r.id + '"/>';
            html += '';
            html += '</form>';
        }
        
        
        html += '</div>'; //fin de pregunta-respuestas
        
        //crear dentro del for un form y cada form tiene un boton y un hidden para enviar la respueta  //para cada boton y hidn un form
        html += '</div>'; //fin de row
        
        
        return html;
    }
    
    return self;
    
}();

module.exports = app;