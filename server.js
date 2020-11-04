const express = require("express");
const mysql = require("mysql");
const cors = require("cors");


const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();

app.use(express.json());
app.use(cors());



const db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "@Gail123",
  database: "LoginSystem",
});

app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err)
    }

    db.query(
      "INSERT INTO users (username, password) VALUES (?,?)",
      [username, hash],
      (err, result) => {
        console.log("failed", err);
        console.log("correct", result);
        res.end();
      }
    );
  })
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users WHERE username = ?;",
    username,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (error, response) => {
          if (response) {
          res.send(result)
          } else {
            res.send({ message: "Wrong username and password combination" });
          }
        })
      } else {
        res.send({ message: "User does not exist" });
        res.end();
      }
    }
  );
});

app.listen(3001, () => {
  console.log("runnning backend");
});

