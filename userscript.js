// ==UserScript==
// @name         Byjus Cleanser
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over BAIJUJ!
// @author       Blitz
// @match        https://byjus.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=byjus.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.querySelector('#social-sharing-btns').style.display = 'none';
    setInterval(()=>{
        // Removing Annoying Bits
        document.querySelector('body > div.bcFloat').style.display = 'none';
        document.querySelector('#bt_invite_box').style.display = 'none';
        document.querySelector('#fixed-up-arrow').style.display = 'none';

        // Changing page layout to be more reader friendly
        document.querySelector('body > div.wrapper > div > div > div.col-sm-5.col-md-4').style.display = 'none';
        document.querySelector('body > div.wrapper > div > div > div.col-sm-7.col-md-8').removeAttribute('class');
        document.querySelector('body > div.wrapper > div > div > div:nth-child(1) > div > div').style.width = "";

    }, 1000)

})();
