const express = require("express");
const { ArduinoData } = require("./serial");
const router = express.Router();
const db = require("./connection");

router.get("/", (request, response, next) => {
  let sum = ArduinoData.List.reduce((a, b) => a + b, 0);
  let average = (sum / ArduinoData.List.length).toFixed(2);

  response.json({
    data: ArduinoData.List,
    total: ArduinoData.List.length,
    average: isNaN(average) ? 0 : average,
  });
});

router.post("/sendData", (request, response) => {
  let temperatura = ArduinoData.List[ArduinoData.List.length - 1];

  var sql = `INSERT INTO dados(Temperatura, fkArea, fkSensor, fkEmpresa) VALUES(?)`;
  let values = [temperatura, 2, 1, 1];

  db.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Medidas inseridas: " + result.affectedRows);
  });
  response.sendStatus(200);
});

module.exports = router;
