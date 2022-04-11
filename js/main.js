"use strict";

function setAppVersion() {
  const APP_VERSION = "0.0.10";
  const label_version = document.querySelector("#versionApp");

  label_version.textContent = APP_VERSION;
}

function setDefaultValue() {
  const DEFAULT_COLOR = "#f1f1f1";

  const colorOutput = document.querySelector("#colorBox");
  const htmlSelector = document.querySelector("#htmlSelector");
  const redRange = document.querySelector("#redRange");
  const greenRange = document.querySelector("#greenRange");
  const blueRange = document.querySelector("#blueRange");

  const redLabel = document.querySelector("#redLabel");
  const greenLabel = document.querySelector("#greenLabel");
  const blueLabel = document.querySelector("#blueLabel");

  const hexadecimalCode = document.querySelector("#hexaColor");
  const RGBCode = document.querySelector("#rgbColor");

  colorOutput.style.backgroundColor = DEFAULT_COLOR;
  htmlSelector.value = DEFAULT_COLOR;
  redRange.value = 241;
  greenRange.value = 241;
  blueRange.value = 241;

  redLabel.textContent = redRange.value;
  greenLabel.textContent = greenRange.value;
  blueLabel.textContent = blueRange.value;

  hexadecimalCode.textContent = DEFAULT_COLOR;
  RGBCode.textContent = colorOutput.style.backgroundColor;


  console.log(colorOutput.style.backgroundColor);
}

function getColorBox() {
  const colorOutput = document.querySelector("#colorBox");

  return colorOutput.style.backgroundColor;
}

function setColorOutput(color) {
  const colorOutput = document.querySelector("#colorBox");

  colorOutput.style.backgroundColor = color;
}

function setHexadecimalCode(color) {
  const hexadecimalCode = document.querySelector("#hexaColor");

  hexadecimalCode.textContent = color;
}

function setRGBCode(color) {
  const rgbCode = document.querySelector("#rgbColor");

  rgbCode.textContent = color;
}


function main() {
  const htmlSelector = document.querySelector("#htmlSelector");

  setAppVersion();

  setDefaultValue();

  htmlSelector.addEventListener("input", () => {
    setColorOutput(htmlSelector.value);
    setHexadecimalCode(htmlSelector.value);
    setRGBCode(getColorBox());
  });
}

main();
