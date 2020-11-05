function boringFunction(app, db) {
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

  app.get("/search/:query", (req, res) => {
    console.log("req:", req.params);
    // db.query("SELECT FROM reviews ")
    // res.send or res.json will send somehting back to the frontend
    res.end();
  });
}

module.exports = boringFunction;
