const btnUp = document.getElementById("btnup");
const btnDown = document.getElementById("btndown");

// با کلیک بروی عنصر داخل storage chrome
// برای فراخوانی فانکشن در سمت content
btnUp.addEventListener("click", () => {
  chrome.storage.sync.set({ ytPShowUpperSelector: "Popup" });
});
btnDown.addEventListener("click", () => {
  chrome.storage.sync.set({ ytPShowSubtitle: "Show" });
});
