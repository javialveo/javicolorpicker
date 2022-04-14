"use strict";

function setAppVersion() {
  const APP_VERSION = "1.0.0";
  const label_version = document.querySelector("#versionApp");

  label_version.textContent = APP_VERSION;
}

function setDefaultValue() {
  const DEFAULT_COLOR = "#f1f1f1";

  const colorOutput = document.querySelector("#colorOutput");
  const htmlSelector = document.querySelector("#htmlSelector");
  const redLevel = document.querySelector("#redLevel");
  const greenLevel = document.querySelector("#greenLevel");
  const blueLevel = document.querySelector("#blueLevel");

  const amountOfRed = document.querySelector("#amountOfRed");
  const amountOfGreen = document.querySelector("#amountOfGreen");
  const amountOfBlue = document.querySelector("#amountOfBlue");

  const hexadecimalCode = document.querySelector("#hexaCode");
  const rgbCode = document.querySelector("#rgbCode");

  colorOutput.style.backgroundColor = DEFAULT_COLOR;
  htmlSelector.value = DEFAULT_COLOR;
  redLevel.value = 241;
  greenLevel.value = 241;
  blueLevel.value = 241;

  amountOfRed.textContent = redLevel.value;
  amountOfGreen.textContent = greenLevel.value;
  amountOfBlue.textContent = blueLevel.value;

  hexadecimalCode.textContent = DEFAULT_COLOR;
  rgbCode.textContent = colorOutput.style.backgroundColor;


  console.log(colorOutput.style.backgroundColor);
}

function getColorBox() {
  const colorOutput = document.querySelector("#colorOutput");

  return colorOutput.style.backgroundColor;
}

function setColorOutput(color) {
  const colorOutput = document.querySelector("#colorOutput");

  colorOutput.style.backgroundColor = color;
}

function setHexadecimalCode(color) {
  const hexadecimalCode = document.querySelector("#hexaCode");

  hexadecimalCode.textContent = color;
}

function setRGBCode(color) {
  const rgbCode = document.querySelector("#rgbCode");

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
