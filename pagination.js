const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch({headless:false});
	const page = await browser.newPage();
	let responce = await page.goto('https://books.toscrape.com/');
	
    let allProduct =[];
    for(let i=0; i<5; i++){
        const result = await page.evaluate(() =>{
            let data =[];
            let products = document.querySelectorAll(".product_pod");
    
        for(let product of products){
            data.push({
                title :product.querySelector("h3 a").textContent
            })
        }
        return data;
        })
        allProduct.push(...result);
        await page.click(".next a");
    }
  

    console.log(allProduct , allProduct.length)
	await browser.close();
})();