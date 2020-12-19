//const { response } = require('express');

const puppeteer = require('puppeteer');

//http://ambler.thebeautyinstituteskp.edu/

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://ambler.thebeautyinstituteskp.edu/');
  await page.type('#input_6_1', 'AndyTest AmblerCOSDEskStartCareerNow'); 
  await page.type('#input_6_2', 'ydnaod@gmail.com'); 
  await page.type('#input_6_3', '9086709533'); 
  await page.type('#input_6_4', 'Cosmetology'); 

  await page.click('#gform_submit_button_6');
  console.log('lets gooo');
  await page.screenshot({path: 'example.png'});
  // other actions...
  await browser.close();
})();