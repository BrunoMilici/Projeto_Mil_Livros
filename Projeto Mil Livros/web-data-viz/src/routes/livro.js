var express = require("express");
var router = express.Router();

var livroController = require("../controllers/LivroController");

router.post("/registrar", function (req, res) {
    livroController.registrar(req, res);
});


router.post("/autenticar", function (req, res) {
    livroController.autenticar(req, res);
});

router.post("/publicar/:fkUsuarioAnalise", function (req, res) {
    livroController.publicar(req, res);
});

router.get("/listar", function (req, res) {
    livroController.listar(req, res);
});



module.exports = router;