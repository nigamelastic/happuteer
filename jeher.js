
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false}); 
  const page = await browser.newPage()
  await page.goto('https://trix-editor.org/')
  await page.focus('trix-editor')
  await page.keyboard.type('Just adding a title')
  await page.waitFor(3000);
  //await page.screenshot({ path: 'keyboard.png' })
  await page.goto('https://soundcloud.com/')
  await page.hover('.playableTile__artwork')
  await page.screenshot({ path: 'hover.png' })
  await page.waitFor(3000);
  await page.setViewport({ width: 800, height: 600 })
  
  // go to a page setup for mouse event tracking
  await page.goto('http://unixpapa.com/js/testmouse.html')

  // click an area
  await page.mouse.click(132, 103, { button: 'left' })

  // the screenshot should show feedback from the page that right part was clicked.
  await page.screenshot({ path: 'mouse_click.png' })

  await browser.close()
  })()
