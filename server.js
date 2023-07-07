const express = require("express");
const mysql = require("mysql");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");
const db = mysql.createConnection({
  host: "localhost",
  database: "to-do-list",
  user: "root",
  password: "",
});

db.connect((err) => {
  // if (err) throw err
  console.log("DB Connected");
  const sql = "SELECT * FROM todolist";

  db.query(sql, (err, result) => {
    const users = JSON.parse(JSON.stringify(result));
    console.log("Result = ", users);

    //get data
    app.get("/", (req, res) => {
      res.render("index", { users: users, task_name:"To-Do-List App" });
    });

    //insert data
    app.post("/insert", (req, res) => {
        const insert = `INSERT INTO todolist (task_name, description, is_completed) VALUES ()`
        db.query(insert, (err, result) => {
            
        })

    });
  });
});

app.listen(8000, () => {
  console.log("Listening to port 8000");
});
