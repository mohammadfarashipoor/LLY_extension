// content.js
// با تغییر حافظه فانکشن صدا زده میشود
chrome.storage.onChanged.addListener(function (e) {
  if (e.ytPShowUpperSelector && "Popup" === e.ytPShowUpperSelector.newValue) {
    document.getElementsByClassName("lly-settings-toggler")[0].click();
    // برای اینکه دوباره بتوان مفدار را ست کرد ان را پاک میکنیم
    chrome.storage.sync.clear();
  }

  if (e.ytPShowSubtitle && "Show" === e.ytPShowSubtitle.newValue) {
    document.getElementsByClassName("ytp-settings-button")[0].click();
    // برای باز شدن مرحله ای پنجره ها این حلقه گذاشته شده است
    if (document.getElementsByClassName("ytp-menuitem")[2]) {
      document.getElementsByClassName("ytp-menuitem")[2].click();
    }
    // برای اینکه دوباره بتوان مفدار را ست کرد ان را پاک میکنیم

    chrome.storage.sync.clear();
  }
});
