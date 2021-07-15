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

const testForms = () => puppeteer.launch({headless:true}).then(async (browser) => {
  const page = await browser.newPage();
  
  await page.goto('http://allentown.thebeautyinstituteskp.edu/');
  await page.solveRecaptchas();
  
  await page.type('#input_13_1', 'AndyTest AllenCOSDEskStartCareerNow'); 
  await page.type('#input_13_2', 'ydnaod@gmail.com'); 
  await page.type('#input_13_3', '9086709534'); 
  await page.type('#input_13_4', 'Cosmetology'); 

  await page.click('#gform_submit_button_13');
  console.log('lets gooo');


  await Promise.all([
    //page.waitForSelector('#input_7_7'),
    page.waitForTimeout(5000),
    page.click('.schedule'),
  ]);
  await page.type('#input_14_7', 'AndyTest'); 
  await page.type('#input_14_8', 'AllenNAILSDEskScheduleATour'); 
  await page.type('#input_14_2', 'ydnaod12@gmail.com'); 
  await page.type('#input_14_3', '9086709534'); 
  await page.type('#input_14_4', 'Nail Technician'); 

   await page.click('#gform_submit_button_14');
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
  await page.type('#input_8_3', 'AndyTest'); 
  await page.type('#input_8_1', 'AllenSKINRequestInfo'); 
  await page.type('#input_8_7', 'ydnaod12@gmail.com'); 
  await page.type('#input_8_2', '9086709534'); 
  await page.type('#input_8_5', 'Esthetics'); 

  await page.click('#gform_submit_button_8');
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
  

 await page.type('#input_4_7', 'AndyTest'); 
 await page.type('#input_4_8', 'AllenCOSDEskBotRequestInfo'); 
 await page.type('#input_4_4', 'Cosmetology'); 
 await page.type('#input_4_2', 'ydnaod2@gmail.com'); 
 await page.type('#input_4_3', '9086709534'); 

 await page.screenshot({path: 'example9.png'});
 await page.waitForTimeout(2000);
 await page.click('#gform_submit_button_4');
 await page.waitForTimeout(2000);
 await page.screenshot({path: 'example10.png'});
 await page.waitForTimeout(2000);
 await page.screenshot({path: 'example11.png'});
 await page.waitForTimeout(8000);
 await page.screenshot({path: 'example12.png'});

 await page.type('#input_12_1', 'AndyTest AllenCOSDEskStartCareerNow'); 
  await page.type('#input_12_6', 'ydnaod@gmail.com'); 
  await page.type('#input_12_7', '9086709533'); 
  await page.type('#input_12_3', '10002'); 
  await page.type('#input_12_5', 'Cosmetology'); 

  await page.click('#gform_submit_button_12');
  await page.screenshot({path: 'example13.png'});
  await page.waitForTimeout(10000);
 
  // other actions...
  await browser.close();
});

module.exports = {testForms};
