var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "aluno",
  password: "sptech",
  database: "pigsty",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Conectado ao BD com sucesso!");
});

module.exports = connection;
