//const { response } = require('express');

const puppeteer = require('puppeteer');

//http://ambler.thebeautyinstituteskp.edu/

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();


  
  await page.goto('http://ambler.thebeautyinstituteskp.edu/');

  /*
  await page.type('#input_6_1', 'AndyTest AmblerCOSDEskStartCareerNow'); 
  await page.type('#input_6_2', 'ydnaod@gmail.com'); 
  await page.type('#input_6_3', '9086709533'); 
  await page.type('#input_6_4', 'Cosmetology'); 

  await page.click('#gform_submit_button_6');
  console.log('lets gooo');
*/

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
  //await page.click('.fancybox-close');

  await page.screenshot({path: 'example7.png'});
  // other actions...
  await browser.close();
})();