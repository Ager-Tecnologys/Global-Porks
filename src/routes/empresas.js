var express = require("express");
var router = express.Router();

var empresaController = require("../controllers/empresaController");

router.get("/", function (req, res) {
    empresaController.testar(req, res);
});

router.get("/listar", function (req, res) {
    empresaController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de empresaController.js
router.post("/cadastrar", function (req, res) {
    empresaController.cadastrar(req, res);
    console.log("Chegou Rota")
})

router.post("/cadastrarUsuario", function (req, res) {
    empresaController.cadastrarUsuario(req, res);
})

router.post("/solicitarArea", function (req, res) {
    empresaController.solicitarArea(req, res);
})

router.post("/autenticar", function (req, res) {
    empresaController.entrar(req, res);
});

module.exports = router;