const express = require("express");
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(indexRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
  if (error) throw error;
  console.log(`Server running at Port ${PORT}`);
});
