var express = require("express");
var router = express.Router();

var perfilController = require("../controllers/perfilController");

router.post("/cadastrarPerfil", function (req, res) {
    perfilController.cadastrarPerfil(req, res);
})

router.post("/carregarFotosPerfil", function (req, res) {
    perfilController.carregarFotosPerfil(req, res);
})

module.exports = router;