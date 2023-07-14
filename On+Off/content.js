// content.js

const myDiv = document.getElementsByClassName("ytp-panel-menu")[0];

myDiv.innerHTML += `<div class="ytp-menuitem ytp-handler" aria-haspopup="true"  role="menuitem" tabindex="0" >
<div class="ytp-menuitem-icon">
  <svg height="24" viewBox="0 0 24 24" width="24">
    <path
      d="M6,14v-4c0-0.55,.45-1,1-1h3c0.55,0,1,.45,1,1v1H9.5v-0.5h-2v3h2V13H11v1c0,.55-0.45,1-1,1H7C6.45,15,6,14.55,6,14z            M14,15h3c0.55,0,1-0.45,1-1v-1h-1.5v0.5h-2v-3h2V11H18v-1c0-0.55-0.45-1-1-1h-3c-0.55,0-1,.45-1,1v4C13,14.55,13.45,15,14,15z            M20,4H4v16h16V4 M21,3v18H3V3.01C3,3,3,3,3.01,3H21L21,3z"
      fill="white"
    ></path>
  </svg>
</div>
<div class="ytp-menuitem-label">
  <div>
    <span>Subtitles</span>
  </div>
</div>
<div class="ytp-menuitem-content ytp-handler-text" style="background: none">On</div>
</div>;`;
const newDiv = document.getElementsByClassName("ytp-menuitem ytp-handler")[0];
const newDivText = document.getElementsByClassName("ytp-handler-text")[0];

// تابع زیر با هر بار کلیک عمل تغییر حالت وضعیت زیرنویس را تغییر میدهد
newDiv.addEventListener("click", () => {
  const youTubeButton = document.getElementsByClassName(
    "ytp-subtitles-button"
  )[0];
  const llyButton = document.getElementsByClassName(
    "lly-toggle-button ytp-button"
  )[0];

  // روشن یا خاموش بودن زیرنویس را چک میکند
  if (newDiv.ariaHaspopup) {
    llyButton.ariaPressed ? (llyButton.ariaPressed = false) : null;
    youTubeButton.ariaPressed ? (youTubeButton.ariaPressed = false) : null;

    newDivText.innerText = "Off";
    newDiv.ariaHaspopup = false;
  } else {
    llyButton.ariaPressed ? (llyButton.ariaPressed = true) : null;
    youTubeButton.ariaPressed ? (youTubeButton.ariaPressed = true) : null;

    newDivText.innerText = "On";
    newDiv.ariaHaspopup = true;
  }
});
