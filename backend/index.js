const article = require("./routes/articles.route.js");
const scrape = require("./routes/scrape.route.js");
const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
require("dotenv").config();

const port = process.env.PORT || 8080;
app.use(express.json());
app.use(cors());

app.use("/", article);
app.use("/", scrape);

app.listen(port, () => {
  console.log(`server runnig at ${port}`);
});
