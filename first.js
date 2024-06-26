const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	let responce = await page.goto('https://books.toscrape.com/');
	const content = await page.content();

    console.log(content, "ALL")
	await browser.close();
})();