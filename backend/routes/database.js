// const mysql = require("mysql");

// const con = mysql.createConnection({
//   host: "sql202.epizy.com",
//   port: "3306",
//   user: "epiz_33747877",
//   password: "naFBRTysZR8",
//   database: "epiz_33747877_e_ticket",
// });

// module.exports = con;

const mysql = require("mysql");

const con = mysql.createConnection({
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "",
  database: "e_ticket",
});

module.exports = con;
