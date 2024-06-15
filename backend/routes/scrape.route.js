const express = require("express");
const { default: puppeteer } = require("puppeteer");
const router = express.Router();

router.post("/scrape", async (req, res) => {
  const topic = req.body.topic;

  try {
    const ans = await scrapeMediumArticles(topic);
    res.status(200).json({ status: true, data: ans });
  } catch (error) {
    res.status(400).json({ status: false, data: error.message });
  }
});

async function scrapeMediumArticles(topic) {
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: true,
    });
    const page = await browser.newPage();

    await page.goto(`https://medium.com/search?q=${topic}`, {
      waitUntil: "networkidle2",
      timeout: 40000,
    });

    const articles = await page.evaluate(() => {
      return Array.from(document.querySelectorAll("article"))
        .slice(0, 5)
        .map((article) => {
          const titleElement = article.querySelector("h2");
          const bodyElement = article.querySelector("h3");
          const linkElement = article.querySelector('[role="link"]');
          const authorElement = article.querySelector(".ab.af");
          return {
            title: titleElement ? titleElement.innerText : "",
            body: bodyElement ? bodyElement.innerText : "",
            link: linkElement ? linkElement?.getAttribute("data-href") : "#",
            author: authorElement ? authorElement.innerText : "",
          };
        });
    });

    return articles;
  } catch (error) {
    console.error(error);
    return [];
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

module.exports = router;
