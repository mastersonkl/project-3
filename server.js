const express = require("express");



const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

var db = require("./models");


db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("Server Listening on" + PORT);
  });
});

//from kendall build
// const express = require("express");
// const mysql = require("mysql");
// const cors = require("cors");

// const app = express();

// app.use(express.json());
// app.use(cors());

// const db = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "@Gail23",
//     database: "LoginSystem",

// });

// app.post('/register', (req, res) => {

//     const username = req.body.username
//     const password = req.body.password




//     db.query("INSERT INTO users (username, password) VALUES (?,?)",
//         [username, password],
//         (err, result) => {
//             console.log(err);
//         }
//     );
// });



// app.listen(8080, () => {
//     console.log("running server");
// });

