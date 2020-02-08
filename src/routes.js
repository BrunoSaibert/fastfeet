const { Router } = require("express");

const routes = new Router();

routes.get("/", (req, res) => {
  return res.json({ m: "ola mundo" });
});

module.exports = routes;
