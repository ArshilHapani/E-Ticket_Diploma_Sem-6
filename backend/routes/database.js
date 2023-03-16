import { createConnection } from "mysql";
import * as dotenv from "dotenv";
dotenv.config();

const con = createConnection({
  host: "bno0jpwejbio1biaufqs-mysql.services.clever-cloud.com",
  port: "3306",
  user: process.env.SQL_USER_USERNAME_SECRET,
  password: process.env.SQL_USER_PASSWORD_SECRET,
  database: "bno0jpwejbio1biaufqs",
});
// const con = createConnection({
//   host: "127.0.0.1",
//   port: "3306",
//   user: "root",
//   password: "",
//   database: "e_ticket",
// });

export default con;
