const ambler = require('./amblerDesk');
const stroudsburg = require('./StroudsburgDesk');
const philly = require('./PhillyDesk');
const allentown = require('./AllentownDesk');
const mobileAmblerLP1 = require('./mobileAmblerLP1');
const mobileAmblerLP2 = require('./mobileAmblerLP2');

/*
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
*/
mobileAmblerLP2.testForms();
//mobileAmblerLP1.testForms();
//ambler.testForms();
//philly.testForms();
//allentown.testForms();
//stroudsburg.testForms();
//http://ambler.thebeautyinstituteskp.edu/
