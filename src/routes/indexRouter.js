const { Router } = require("express");
const { getMessages } = require("../controllers/indexControllers");

const indexRouter = Router();

indexRouter.get("/", getMessages);
indexRouter.get("/new")

module.exports = indexRouter;