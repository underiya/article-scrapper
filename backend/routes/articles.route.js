const express = require("express");
const path = require("path");
const router = express.Router();
const fs = require("fs");

router.get("/articles", (req, res) => {
  // const filePath = path.join(__dirname, "..", "db.json");
  // const data = fs.readdirSync(filePath, "utf8");
  // const jsonData = JSON.parse(data);

  // console.log(jsonData);
  try {
    res.json({ status: true, data: "articles" });
  } catch (error) {
    res.json({ status: false, data: error });
  }
});

module.exports = router;
