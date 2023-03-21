import { createConnection } from "mysql";

// const con = createConnection({
//   host: "sql202.epizy.com",
//   port: "3306",
//   user: "epiz_33747877",
//   password: "naFBRTysZR8 ",
//   database: "epiz_33747877_e_ticket",
// });
const con = createConnection({
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "",
  database: "e_ticket",
});

export default con;
