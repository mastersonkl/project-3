/* eslint-disable no-unused-expressions */
var express = require("express"),
    app = express(),
    PORT = process.env.PORT || 8080,
    db = require("./models");
app.use(express.urlencoded({extended: true})),
app.use(express.json()),
app.use(express.static("public")),
require("./routes/api-routes.js")(app),
require("./routes/html-routes.js")(app),
db.sequelize.sync({force: true}).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});
