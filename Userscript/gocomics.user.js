// ==UserScript==
// @name        Gocomics Depaywall
// @description Bypasses the Gocomics Paywall and Removes Ads
// @icon        https://github.com/Idiot-01/Gocomics-Depaywall/raw/master/Extension/icons/icon48.png
// @match       *://*.gocomics.com/*
// @grant       none
// @version     2.0
// @author      Idiot01
// @compatible  chrome
// @compatible  firefox
// @compatible  opera
// @compatible  safari
// @compatible  edge
// @downloadURL https://github.com/Idiot-01/Gocomics-Depaywall/raw/master/Userscript/gocomics.user.js
// @updateURL   https://github.com/Idiot-01/Gocomics-Depaywall/raw/master/Userscript/gocomics.user.js
// @run-at      document-end
// ==/UserScript==

// Note: any JS manipulation seems to be detected by website scripts, revert to pure CSS style injection
(function () {
  'use strict';

  // Hide ad elements, set overflow:auto to allow scroll
  const css = `
    div[class*="AdDisplay"],
    div[class*="HeaderAd"],
    div[class*="UpsellSectionBreak"],
    div[data-paywall] {
        display: none !important;
    }
    html, body {
        overflow: auto !important;
    }
  `;
  // now comic class name: div[class*="RollUpUpsell"]

  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
})();

// chat ads hidden within closed shadow root, can't remove
