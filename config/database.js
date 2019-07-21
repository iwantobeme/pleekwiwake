import mysql from "mysql";

const connection = mysql.createConnection({
  multipleStatements: true,
  host: "localhost",
  user: "root",
  password: "5Em9b6h0NzWdJjq5git",
  database: "webwat"
});
export default connection;
