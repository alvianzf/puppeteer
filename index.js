const puppeteer = require("puppeteer");

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ['--start-maximized'] 
    })
    const page = await browser.newPage()
    
    console.log("=== loading login page===")
    await page.goto('https://developers.turing.com/login', {
        waitUntil: "networkidle2"
    })

    await page.waitForSelector('input[name=email]')

    console.log('=== login page loaded ===')

    await page.focus('input[name=email]')
    await page.type('input[name=email]', 'zack.of.martial.arts@gmail.com', {delay: 300})
    await page.type('input[name=password]', 'Dirgahayu7', {await: 200})
    // await page.type('input[name=password]', 'Dirgahayu7', {delay: 350})
    await page.click('#root > div > div > div.SignInPage-portal > div.SignInPage-form-container > form > div:nth-child(3) > div > button')

    await page.waitForSelector('#drawer_container > div > ul > li:nth-child(5) > a')

    await page.goto('https://developers.turing.com/dashboard/turing_test', {
        waitUntil: "networkidle2"
    })
    
    console.log('=== Login successful ===')

    await page.click('#drawer_container > div > ul > li:nth-child(5) > a')


    // await page.screenshot();

    // await browser.close()
})();