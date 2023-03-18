import { createConnection } from "mysql";

const con = createConnection({
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "",
  database: "e_ticket",
});

export default con;
