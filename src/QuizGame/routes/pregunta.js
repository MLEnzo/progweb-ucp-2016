var express = require('express');
var router = express.Router();


router.get('/:id', function (req, res) {
    
    var preguntadId = req.params.id;
    console.log('preguntadId:', preguntadId);
    
    var pregunta = {
        id : preguntadId,
        descripcion: '¿Cual es el color favorito?',
        respuestas: [
            {
                id: 1,
                descripcion: 'Rta 1',
                esCorrecta: false,
            },
            {
                id: 2,
                descripcion: 'Rta 2',
                esCorrecta: true,
            },
            {
                id: 3,
                descripcion: 'Rta 3',
                esCorrecta: false,
            }
        ]
     }
    

    res.render('pregunta', pregunta);
});

module.exports = router;