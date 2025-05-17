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