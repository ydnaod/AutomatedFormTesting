//const { response } = require('express');
const config = require('./config');
//const puppeteer = require('puppeteer');
const puppeteer = require('puppeteer-extra');

const RecaptchaPlugin = require('puppeteer-extra-plugin-recaptcha');
puppeteer.use(
  RecaptchaPlugin({
    provider: {
      id: '2captcha',
      token: config.KEY, // REPLACE THIS WITH YOUR OWN 2CAPTCHA API KEY ⚡
    },
    visualFeedback: true, // colorize reCAPTCHAs (violet = detected, green = solved)
  })
);

//ambler.testForms();
//http://ambler.thebeautyinstituteskp.edu/
const testForms = () => puppeteer.launch({headless:true}).then(async (browser) => {
  const page = await browser.newPage();
  
  await page.goto('http://stroudsburg.thebeautyinstituteskp.edu/');
  await page.solveRecaptchas();
  
  await page.type('#input_11_1', 'AndyTest StroudsCOSDEskStartCareerNow'); 
  await page.type('#input_11_2', 'ydnaod@gmail.com'); 
  await page.type('#input_11_3', '9086709533'); 
  await page.type('#input_11_4', 'Cosmetology'); 

  await page.click('#gform_submit_button_11');
  console.log('lets gooo');


  await Promise.all([
    //page.waitForSelector('#input_7_7'),
    page.waitForTimeout(5000),
    page.click('.schedule'),
  ]);
  await page.type('#input_12_7', 'AndyTest'); 
  await page.type('#input_12_8', 'StroudsNAILSDEskScheduleATour'); 
  await page.type('#input_12_2', 'ydnaod12@gmail.com'); 
  await page.type('#input_12_3', '9086709534'); 
  await page.type('#input_12_4', 'Nail Technician'); 

   await page.click('#gform_submit_button_12');
   //await page.screenshot({path: 'example.png'});

  await Promise.all([
    //page.click('#gform_submit_button_7'),
    page.screenshot({path: 'example.png'}),
    //page.waitForSelector('#gform_confirmation_message_7'),
    page.waitForTimeout(5000),
    page.screenshot({path: 'example2.png'})
  ]);

  await page.waitForTimeout(5000);
  await page.screenshot({path: 'example3.png'});
  await page.click('.fancybox-overlay');
  await page.screenshot({path: 'example4.png'});
  
  await page.waitForTimeout(5000);

  await Promise.all([
    //page.waitForSelector('.request-info'),
    //page.waitForSelector('#input_3_3'),
    page.waitForTimeout(5000),
    page.click('.request-info')
  ]);
  await page.waitForTimeout(3000);
  await page.type('#input_6_3', 'AndyTest'); 
  await page.type('#input_6_1', 'StroudsCOSRequestInfo'); 
  await page.type('#input_6_7', 'ydnaod12@gmail.com'); 
  await page.type('#input_6_2', '9086709534'); 
  await page.type('#input_6_5', 'Cosmetology'); 

  await page.click('#gform_submit_button_6');
  await page.screenshot({path: 'example5.png'});
  await Promise.all([
    //page.waitForSelector('#gform_confirmation_message_3'),
    page.waitForTimeout(5000),
    page.screenshot({path: 'example6.png'}),
    page.click('.fancybox-overlay'),
    page.screenshot({path: 'example7.png'})
  ]);
 
  await page.waitForTimeout(3000);
  await page.click('.fancybox-overlay');
  await page.screenshot({path: 'example8.png'});
  

 await page.type('#input_2_7', 'AndyTest'); 
 await page.type('#input_2_8', 'StroudsCOSDEskBotRequestInfo'); 
 await page.type('#input_2_4', 'Cosmetology'); 
 await page.type('#input_2_2', 'ydnaod2@gmail.com'); 
 await page.type('#input_2_3', '9086709534'); 

 await page.screenshot({path: 'example9.png'});
 await page.waitForTimeout(2000);
 await page.click('#gform_submit_button_2');
 await page.waitForTimeout(2000);
 await page.screenshot({path: 'example10.png'});
 await page.waitForTimeout(2000);
 await page.screenshot({path: 'example11.png'});
 await page.waitForTimeout(8000);
 await page.screenshot({path: 'example12.png'});

 await page.type('#input_10_1', 'AndyTest StroudsCOSDEskStartCareerNow'); 
  await page.type('#input_10_8', 'ydnaod@gmail.com'); 
  await page.type('#input_10_7', '9086709533'); 
  await page.type('#input_10_3', '10002'); 
  await page.type('#input_10_5', 'Cosmetology'); 

  await page.click('#gform_submit_button_10');
  await page.screenshot({path: 'example13.png'});
  await page.waitForTimeout(10000);
 
  // other actions...
  await browser.close();
});

module.exports = {testForms};