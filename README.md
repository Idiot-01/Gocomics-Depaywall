# Gocomics Depaywall

Just a simple userscript to bypass the soft paywall on gocomics.com, and removes the adspaces as well. If you have uBlockOrigin, just add the set of filters listed below, as the script just does the exact same thing!

# Usage

If you have access to uBlockOrigin on your browser, it's strongly recommended to use that method. I made the userscript mainly for devices on iOS that don't have access to free element blockers but have free userscript managers.

## Userscript

Install any userscript manager, such as [Userscripts](https://apps.apple.com/app/userscripts/id1463298887) for iOS / [Violentmonkey](https://addons.mozilla.org/firefox/addon/violentmonkey/) for Firefox / [Tampermonkey](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) for Chrome.
Then go to the [userscript raw page](https://github.com/Idiot-01/Gocomics-Depaywall/raw/master/Userscript/gocomics.user.js) and your userscript manager should prompt you to install it.

## uBlockOrigin Custom Filters

```
! Gocomics Ad Spaces
gocomics.com##div[class*="AdDisplay"]
gocomics.com##div[class*="HeaderAd"]
gocomics.com##div[class*="RollUpUpsell"]
gocomics.com##div[class*="UpsellSectionBreak"]
gocomics.com##div[data-paywall]
gocomics.com##html:style(overflow: auto !important;)
gocomics.com##body:style(overflow: auto !important;)
```
