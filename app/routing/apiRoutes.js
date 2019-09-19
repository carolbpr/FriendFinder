var Data = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(Data);
  });
  app.post("/api/friends", function(req, res) {
      Data.push(req.body);
      res.json(Data);
  });
  app.post("/api/clear", function(req, res) {
    Data.length = 0;
    res.json({ ok: true });
  });
};