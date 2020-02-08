import { Router } from "express";

const routes = new Router();

routes.get("/", (req, res) => {
  return res.json({ m: "ola mundo" });
});

export default routes;
