//const { response } = require('express');

const puppeteer = require('puppeteer');

//http://ambler.thebeautyinstituteskp.edu/

const testForms = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  //await page.goto('http://m.thebeautyinstituteskp.edu/campus/ambler-beauty-schools?lead_src=facebook-mobile');
  await page.goto('http://m.thebeautyinstituteskp.edu/campus/ambler-beauty-schools/esthetics?lead_src=facebook-mobile');
  await page.type('#ambler_firstname', 'AndyTestfacebook'); 
  await page.type('#ambler_lastname', 'AmblerSkinMOBStartCareerNow'); 
  await page.type('#ambler_phone', '9086709534'); 
  await page.type('#ambler_email', 'ydnaod12@gmail.com'); 

  await page.click('#bt_submit');
  console.log('lets gooo!');
  await page.screenshot({path: 'ambler.png'});
  await page.waitForTimeout(10000);

  await page.goto('http://m.thebeautyinstituteskp.edu/campus/ambler-beauty-schools/cosmetology?lead_src=facebook-mobile');
  await page.type('#ambler_firstname', 'AndyTestfacebook'); 
  await page.type('#ambler_lastname', 'AmblerCosMOBStartCareerNow'); 
  await page.type('#ambler_phone', '9086709534'); 
  await page.type('#ambler_email', 'ydnaod12@gmail.com'); 

  await page.click('#bt_submit');
  console.log('lets gooo');
  await page.screenshot({path: 'ambler.png'});
  await page.waitForTimeout(10000);

  await page.goto('http://m.thebeautyinstituteskp.edu/campus/philadelphia-beauty-schools/esthetics?lead_src=facebook-mobile');
  await page.type('#ambler_firstname', 'AndyTestfacebook'); 
  await page.type('#ambler_lastname', 'PhillySkinMOBStartCareerNow'); 
  await page.type('#ambler_phone', '9086709534'); 
  await page.type('#ambler_email', 'ydnaod12@gmail.com'); 

  await page.click('#bt_submit');
  console.log('lets gooo');
  await page.screenshot({path: 'ambler.png'});
  await page.waitForTimeout(10000);

  await page.goto('http://m.thebeautyinstituteskp.edu/campus/philadelphia-beauty-schools/cosmetology?lead_src=facebook-mobile');
  await page.type('#ambler_firstname', 'AndyTestfacebook'); 
  await page.type('#ambler_lastname', 'PhillyCosMOBStartCareerNow'); 
  await page.type('#ambler_phone', '9086709534'); 
  await page.type('#ambler_email', 'ydnaod12@gmail.com'); 

  await page.click('#bt_submit');
  console.log('lets gooo');
  await page.screenshot({path: 'ambler.png'});
  await page.waitForTimeout(10000);
  // other actions...
  await browser.close();
};

module.exports = {testForms};