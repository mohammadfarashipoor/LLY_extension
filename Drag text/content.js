// content.js

const primaryTxt = document.getElementsByClassName("lly-primary-subtitle")[0];
const secondaryTxt = document.getElementsByClassName(
  "lly-secondary-subtitle"
)[0];
// تنها در صورت وجود عنصر تغییرات اعمال میشود
if (primaryTxt) {
  primaryTxt.style = "position: absolute;top:-60px";
  primaryTxt.classList.add("dragme");
  primaryTxt.setAttribute("data-item", "0");
  primaryTxt.setAttribute("draggable", "true");
}
if (secondaryTxt) {
  secondaryTxt.style = "position: absolute;top:-30px";
  secondaryTxt.classList.add("dragme", "second");
  secondaryTxt.setAttribute("data-item", "1");
  secondaryTxt.setAttribute("draggable", "true");
}

function drag_start(event) {
  var style = window.getComputedStyle(event.target, null);
  event.dataTransfer.setData(
    "text/plain",
    parseInt(style.getPropertyValue("left"), 10) -
      event.clientX +
      "," +
      (parseInt(style.getPropertyValue("top"), 10) - event.clientY) +
      "," +
      event.target.getAttribute("data-item")
  );
}

function drag_over(event) {
  event.preventDefault();
  return false;
}

function drop(event) {
  var offset = event.dataTransfer.getData("text/plain").split(",");
  var dm = document.getElementsByClassName("dragme");
  dm[parseInt(offset[2])].style.left =
    event.clientX + parseInt(offset[0], 10) + "px";
  dm[parseInt(offset[2])].style.top =
    event.clientY + parseInt(offset[1], 10) + "px";
  console.log(offset[0], "&", offset[1]);

  event.preventDefault();
  return false;
}

const dm = document.getElementsByClassName("dragme");
const playerContainer = document.getElementsByClassName(
  "html5-video-container"
)[0];

// تعداد المنت هایی که میخواهی درگ و دراپ روی انها انجام شود
for (var i = 0; i < dm.length; i++) {
  dm[i].addEventListener("dragstart", drag_start, false);

  playerContainer.addEventListener("dragover", drag_over, false);
  playerContainer.addEventListener("drop", drop, false);
}
