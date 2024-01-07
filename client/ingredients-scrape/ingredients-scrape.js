// import puppeteer from 'puppeteer';
const puppeteer = require('puppeteer');

const ingredientScrape = async (url) => {
  //launch a browser programmatically so we can use it to scrape
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  
  const html = await page.content();
  console.log(html);

  await browser.close();
};

export default ingredientScrape;