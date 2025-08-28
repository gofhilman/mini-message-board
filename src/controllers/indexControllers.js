const { messages } = require("../db");
const formatTime = require("../utils/format-time");

async function getMessages(_, res) {
  res.render("main-layout", {
    formatTime,
    messages,
    page: "index",
    title: "Home",
  });
}

async function getForm(_, res) {
  res.render("main-layout", { page: "form", title: "New message" });
}

async function postForm(req, res) {
  messages.push({
    text: req.body.message,
    user: req.body.author,
    added: new Date(),
  });
  res.redirect("/");
}

module.exports = { getMessages, getForm, postForm };
