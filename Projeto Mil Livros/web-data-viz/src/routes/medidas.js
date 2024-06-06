var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/habitos", function (req, res) {
    medidaController.buscarMedidasHabitos(req, res);
});

router.get("/notas", function (req, res) {
    medidaController.buscarMedidasHabitos(req, res);
});




module.exports = router;