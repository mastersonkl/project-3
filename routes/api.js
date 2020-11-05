const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

// VVV unknown if necessary. is only one conn needed or
// VVV does every file that uses it need one? check later
// const db = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "keroKero445",
//   database: "ryldb",
// });

app.post("/newreview", (req, res) => {
  // posting new review
  const { landlordName, address, rateStars, rentAgain, tellMore } = req.body;

  db.query(
    "INSERT INTO reviews (`name`, address, rating, rentAgain, review) VALUES (?,?,?,?,?)",
    [landlordName, address, rateStars, rentAgain, tellMore],
    (err, result) => {
      if (err) {
        console.log("failed", err);
        return;
      }
      console.log("correct", result);
      res.end();
    }
  );
});
