function boringFunction(app, db) {
  app.post("/newreview", (req, res) => {
    // posting new review
    const { landlordName, address, rateStars, website, tellMore } = req.body;

    db.query(
      "INSERT INTO reviews (`name`, address, rating, website, review) VALUES (?,?,?,?,?)",
      [landlordName, address, rateStars, website, tellMore],
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
    console.log("req:", req.params.query);
    const searchTerm = req.params.query;
    db.query(
      "SELECT * FROM reviews WHERE ?",
      { name: searchTerm },
      (err, results) => {
        if (err) throw err;
        console.log("res: ", results);
        if (results[0]) {
          res.send(results);
          return
        }
        // if there are no results for name, query for address.
        db.query(
          "SELECT * FROM reviews WHERE ?",
          { address: searchTerm },
          (err, results) => {
            if (err) throw err;
            console.log("res: ", results);
            if (results[0]) {
              res.send(results);
              return
            } else {
              res.send([]);
              return
            }
            // write code for if no results come back
          }
        );
      }
    );
  });
}

module.exports = boringFunction;
