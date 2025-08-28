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
    id: crypto.randomUUID(),
    text: req.body.message,
    user: req.body.author,
    added: new Date(),
  });
  res.redirect("/");
}

async function getDetails(req, res) {
  const message = messages.find((item) => item.id === req.params.messageId);
  res.render("main-layout", {
    formatTime,
    message,
    page: "message",
    title: "Message details",
  });
}

module.exports = { getMessages, getForm, postForm, getDetails };
