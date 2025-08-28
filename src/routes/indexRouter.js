const { Router } = require("express");
const {
  getMessages,
  getForm,
  postForm,
} = require("../controllers/indexControllers");

const indexRouter = Router();

indexRouter.get("/", getMessages);
indexRouter.get("/new", getForm);
indexRouter.post("/new", postForm);

module.exports = indexRouter;
