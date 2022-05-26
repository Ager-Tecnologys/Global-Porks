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
    console.log("Chegou Rota")
    empresaController.cadastrar(req, res);
})

router.post("/cadastrarUsuario", function (req, res) {
    empresaController.cadastrarUsuario(req, res);
})

router.post("/solicitarArea", function (req, res) {
    console.log("Entrando na rota !")
    empresaController.solicitarArea(req, res);
    console.log("Saindo da rota !")
})

router.post("/autenticar", function (req, res) {
    empresaController.entrar(req, res);
});

module.exports = router;