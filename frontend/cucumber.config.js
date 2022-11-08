
const { BeforeAll, Before, After, AfterAll,setDefaultTimeout }= require("@cucumber/cucumber")
const { chromium } = require("playwright")
setDefaultTimeout(60000)
BeforeAll(async function () {
    global.browser = await chromium.launch({
        headless: false,
        slowMo: 1000,
    })

})

Before(async function () {
    
    global.context = await global.browser.newContext()
    await global.context.tracing.start({ screenshots: true, snapshots: true, sources: true });
    global.page = await global.context.newPage()
})

After(async function () {
    await global.context.tracing.stop({
        path: './tests/reports/screenshots.zip'
      })

    await global.page.close()
    
    await global.context.close()
})

AfterAll(async function () {
    await global.browser.close()
})