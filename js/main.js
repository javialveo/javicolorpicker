"use strict";

function setAppVersion() {
  const APP_VERSION = "0.0.9";
  const label_version = document.querySelector("#versionApp");

  label_version.textContent = APP_VERSION;
}

function setDefaultValue() {
  const DEFAULT_COLOR = "#f1f1f1";

  const boxColor = document.querySelector("#colorBox");
  const htmlSelector = document.querySelector("#htmlSelector");
  const redRange = document.querySelector("#redRange");
  const greenRange = document.querySelector("#greenRange");
  const blueRange = document.querySelector("#blueRange");

  const redLabel = document.querySelector("#redLabel");
  const greenLabel = document.querySelector("#greenLabel");
  const blueLabel = document.querySelector("#blueLabel");

  const hexadecimalCode = document.querySelector("#hexaColor");
  const RGBCode = document.querySelector("#rgbColor");

  boxColor.style.backgroundColor = DEFAULT_COLOR;
  htmlSelector.value = DEFAULT_COLOR;
  redRange.value = 241;
  greenRange.value = 241;
  blueRange.value = 241;

  redLabel.textContent = redRange.value;
  greenLabel.textContent = greenRange.value;
  blueLabel.textContent = blueRange.value;

  hexadecimalCode.textContent = DEFAULT_COLOR;
  RGBCode.textContent = boxColor.style.backgroundColor;


  console.log(boxColor.style.backgroundColor);
}

function setColorBox(color) {
  const boxColor = document.querySelector("#colorBox");

  boxColor.style.backgroundColor = color;
}


function main() {
  const htmlSelector = document.querySelector("#htmlSelector");

  setAppVersion();

  setDefaultValue();

  htmlSelector.addEventListener("input", ()=>{
    setColorBox(htmlSelector.value);
  });
}

main();