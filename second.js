const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	let responce = await page.goto('https://books.toscrape.com/');
	const content = await page.content();
let name = await page.evaluate(() =>{
    let name =[];
    let allName = document.querySelectorAll("h3 a");
    for(let single of allName){
        name.push({data :single.textContent});
    }
    return name;
})

console.log(name)
})();