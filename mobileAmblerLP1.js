//const { response } = require('express');

const puppeteer = require('puppeteer');

//http://ambler.thebeautyinstituteskp.edu/

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  //await page.goto('http://m.thebeautyinstituteskp.edu/campus/ambler-beauty-schools?lead_src=google-mobile');
  await page.goto('http://m.thebeautyinstituteskp.edu/campus/ambler-beauty-schools?lead_src=facebook-mobile');
  await page.type('#ambler_firstname', 'AndyTestFacebook'); 
  await page.type('#ambler_lastname', 'AmblerCOSMOBStartCareerNow'); 
  await page.type('#ambler_phone', '9086709534'); 
  await page.type('#ambler_email', 'ydnaod12@gmail.com'); 
  await page.type('#ambler_interest_id', 'Cosmetology'); 

  await page.click('#bt_submit');
  console.log('lets gooo');
  await page.screenshot({path: 'ambler.png'});
  // other actions...
  await browser.close();
})();