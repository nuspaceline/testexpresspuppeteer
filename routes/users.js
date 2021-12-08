var express = require('express');
var router = express.Router();
const puppeteer = require('puppeteer');

/* GET users listing. */
router.get('/', async function (req, res, next) {

  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();
  await page.goto('https://example.com');
  let htmlTitle = await page.title();

  await browser.close();
  res.send('respond with a resource :' + htmlTitle);
});

module.exports = router;
