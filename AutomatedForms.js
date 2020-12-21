const ambler = require('./amblerDesk');
const stroudsburg = require('./StroudsburgDesk');

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
stroudsburg.testForms();
//http://ambler.thebeautyinstituteskp.edu/
