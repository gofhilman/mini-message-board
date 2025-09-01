const db = require("../db/queries");
const formatTime = require("../utils/format-time");

async function getMessages(_, res) {
  const messages = await db.getAllMessages();
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
  await db.insertMessage({
    text: req.body.message,
    user: req.body.author,
    added: new Date().toISOString(),
  });
  res.redirect("/");
}

async function getDetails(req, res) {
  const message = await db.getMessage(req.params.messageId);
  res.render("main-layout", {
    formatTime,
    message,
    page: "message",
    title: "Message details",
  });
}

module.exports = { getMessages, getForm, postForm, getDetails };
