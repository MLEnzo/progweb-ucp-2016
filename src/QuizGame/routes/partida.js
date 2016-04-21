var express = require('express');
var router = express.Router();


router.get('/listado', function (req, res) {
    
    var partidaVm = { };

    partidaVm.partidas = [
        { descripcion: 'Partida 1' },
        { descripcion: 'Partida 2' }
    ];    

    res.render('partidaListado', partidaVm);
});

router.get('/crear', function (req, res) {
    
    var partidaVm = {};
    
    
    res.render('partidaCrear', partidaVm);
});

module.exports = router;