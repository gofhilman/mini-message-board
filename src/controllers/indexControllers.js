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

module.exports = { getMessages };
