//const { response } = require('express');

const puppeteer = require('puppeteer');

//http://ambler.thebeautyinstituteskp.edu/

const testForms = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  //await page.goto('http://m.thebeautyinstituteskp.edu/campus/ambler-beauty-schools?lead_src=google-mobile');
  //await page.goto('http://m.thebeautyinstituteskp.edu/campus/ambler-beauty-schools/cosmetology?lead_src=facebook-mobile');
  await page.goto('http://m.thebeautyinstituteskp.edu/campus/allentown-beauty-schools/esthetics?lead_src=google-mobile');
  await page.type('#ambler_firstname', 'AndyTestGoogle'); 
  await page.type('#ambler_lastname', 'AllentownSkinMOBStartCareerNow'); 
  await page.type('#ambler_phone', '9086709534'); 
  await page.type('#ambler_email', 'ydnaod12@gmail.com'); 

  await page.click('#bt_submit');
  console.log('lets gooo');
  await page.screenshot({path: 'allentown.png'});
  await page.waitForTimeout(10000);

  await page.goto('http://m.thebeautyinstituteskp.edu/campus/allentown-beauty-schools/cosmetology?lead_src=google-mobile');
  await page.type('#ambler_firstname', 'AndyTestGoogle'); 
  await page.type('#ambler_lastname', 'AllentownCosMOBStartCareerNow'); 
  await page.type('#ambler_phone', '9086709534'); 
  await page.type('#ambler_email', 'ydnaod12@gmail.com'); 

  await page.click('#bt_submit');
  console.log('lets gooo');
  await page.screenshot({path: 'allentown.png'});
  await page.waitForTimeout(10000);

  await browser.close();
};

module.exports = {testForms};
