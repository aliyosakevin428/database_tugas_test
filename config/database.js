import mysql from "mysql2";

const database = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "tugas_database",
});

export default database.promise();
