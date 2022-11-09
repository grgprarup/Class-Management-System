const { BeforeAll, Before, After, AfterAll,setDefaultTimeout }= require("@cucumber/cucumber")
const { chromium } = require("playwright")
setDefaultTimeout(60000)
BeforeAll(async function () {
    global.browser = await chromium.launch({
        headless: false,
        slowMo: 1000,
        video: 'retain-on-failure',
    })

})

Before(async function () {
    const config = {}
    config['recordVideo'] = {
        dir: './tests/reports/videos',
        size: { width: 1920, height: 1080 }
      }
    global.context = await global.browser.newContext(config)
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