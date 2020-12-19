//const { response } = require('express');
const config = require('./config');
const puppeteer = require('puppeteer');
//const puppeteer = require('puppeteer-extra');

const RecaptchaPlugin = require('puppeteer-extra-plugin-recaptcha')
/*puppeteer.use(
  RecaptchaPlugin({
    provider: {
      id: '2captcha',
      token: config.KEY, // REPLACE THIS WITH YOUR OWN 2CAPTCHA API KEY ⚡
    },
    visualFeedback: true, // colorize reCAPTCHAs (violet = detected, green = solved)
  })
)*/

//http://ambler.thebeautyinstituteskp.edu/

//puppeteer.launch({headless:true}).then
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  console.log(config.KEY)

  
  await page.goto('http://ambler.thebeautyinstituteskp.edu/');
  await page.solveRecaptchas();
  /*
  await page.type('#input_6_1', 'AndyTest AmblerCOSDEskStartCareerNow'); 
  await page.type('#input_6_2', 'ydnaod@gmail.com'); 
  await page.type('#input_6_3', '9086709533'); 
  await page.type('#input_6_4', 'Cosmetology'); 

  await page.click('#gform_submit_button_6');
  console.log('lets gooo');


  await Promise.all([
    page.waitForSelector('#input_7_7'),
    page.click('.schedule'),
  ]);
  await page.type('#input_7_7', 'AndyTest'); 
  await page.type('#input_7_8', 'AmblerSKINDEskScheduleATour'); 
  await page.type('#input_7_2', 'ydnaod12@gmail.com'); 
  await page.type('#input_7_3', '9086709534'); 
  await page.type('#input_7_4', 'Esthetics'); 

   await page.click('#gform_submit_button_7');
   await page.screenshot({path: 'example.png'});

  //await page.click('#gform_submit_button_7');
  await page.screenshot({path: 'example2.png'});

  await Promise.all([
    page.waitForSelector('#gform_confirmation_message_7'),
    page.screenshot({path: 'example3.png'}),
    page.click('.fancybox-item'),
    page.screenshot({path: 'example4.png'})
  ]);

  await page.screenshot({path: 'example5.png'})
  await page.click('.fancybox-overlay')
  await page.screenshot({path: 'example6.png'});
  
  await page.waitForTimeout(5000);

  await Promise.all([
    page.waitForSelector('.request-info'),
    page.waitForSelector('#input_3_3'),
    page.click('.request-info')
  ]);
  await page.waitForTimeout(3000);
  await page.type('#input_3_3', 'AndyTest'); 
  await page.type('#input_3_1', 'AmblerSKINRequestInfo'); 
  await page.type('#input_3_7', 'ydnaod12@gmail.com'); 
  await page.type('#input_3_2', '9086709534'); 
  await page.type('#input_3_5', 'Esthetics'); 

  await page.click('#gform_submit_button_3');
  await Promise.all([
    page.waitForSelector('#gform_confirmation_message_3'),
    page.screenshot({path: 'example3.png'}),
    page.click('.fancybox-item'),
    page.screenshot({path: 'example4.png'})
  ]);
 
  await page.waitForTimeout(3000);
  await page.screenshot({path: 'example7.png'});
  */

 await page.type('#input_1_7', 'AndyTest'); 
 await page.type('#input_1_8', 'AmblerCOSDEskBotRequestInfo'); 
 await page.type('#input_1_4', 'Cosmetology'); 
 await page.type('#input_1_2', 'ydnaod2@gmail.com'); 
 await page.type('#input_1_3', '9086709534'); 

 await page.click(`#recaptcha-demo-submit`);
 await page.screenshot({path: 'example7.png'});
 await page.waitForTimeout(2000);
 await page.click('#gform_submit_button_1');

  // other actions...
  await browser.close();
})();