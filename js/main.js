"use strict";

function setAppVersion() {
  const APP_VERSION = "2.1.1";
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
}

function getColorBox() {
  const colorOutput = document.querySelector("#colorOutput");

  return colorOutput.style.backgroundColor;
}

function getHexadecimal(code) {
  if(code < 256) {
    return Math.abs(code).toString(16);
  }
  return 0;
}

function getHexadecimalColor() {
  const redLevel = document.querySelector("#redLevel");
  const greenLevel = document.querySelector("#greenLevel");
  const blueLevel = document.querySelector("#blueLevel");
  
  let redColor = 0;
  let greenColor = 0;
  let blueColor = 0;
  
  let hexadecimalColor = "#fff";
  
  if(redLevel.value <= 15) {
    redColor = `0${getHexadecimal(redLevel.value)}`;
  } else {
    redColor = `${getHexadecimal(redLevel.value)}`;
  }
  
  if(greenLevel.value < 16) {
    greenColor = `0${getHexadecimal(greenLevel.value)}`;
  } else {
    greenColor = `${getHexadecimal(greenLevel.value)}`;
  }
  
  if(blueLevel.value < 16) {
    blueColor = `0${getHexadecimal(blueLevel.value)}`;
  } else {
    blueColor = `${getHexadecimal(blueLevel.value)}`;
  }
  
  hexadecimalColor = `#${redColor}${greenColor}${blueColor}`;
  
  return hexadecimalColor;
}

function getLevelColor() {
  const redLevel = document.querySelector("#redLevel");
  const greenLevel = document.querySelector("#greenLevel");
  const blueLevel = document.querySelector("#blueLevel");
  
  let colorRGB = `rgb(${redLevel.value}, ${greenLevel.value}, ${blueLevel.value})`;
  
  return colorRGB;
}

function setColorOutput(color) {
  const colorOutput = document.querySelector("#colorOutput");

  colorOutput.style.backgroundColor = color;
}

function setHexadecimalCode(color) {
  const hexadecimalCode = document.querySelector("#hexaCode");

  hexadecimalCode.textContent = color;
}

function setHTMLSelector(){
  const htmlSelector = document.querySelector("#htmlSelector");
  
  htmlSelector.value = getHexadecimalColor();
}

function setLevelColor(color){
  const amountOfRed = document.querySelector("#amountOfRed");
  const amountOfGreen = document.querySelector("#amountOfGreen");
  const amountOfBlue = document.querySelector("#amountOfBlue");
  
  const redLevel = document.querySelector("#redLevel");
  const greenLevel = document.querySelector("#greenLevel");
  const blueLevel = document.querySelector("#blueLevel");
  
  if(color === 0) {
    amountOfRed.textContent = redLevel.value;
  }else if(color === 1) {
    amountOfGreen.textContent = greenLevel.value;
  }else if(color === 2) {
    amountOfBlue.textContent = blueLevel.value;
  }
}

function setRGBCode(color) {
  const rgbCode = document.querySelector("#rgbCode");

  rgbCode.textContent = color;
}

function main() {
  const htmlSelector = document.querySelector("#htmlSelector");
  const rgbSelector = document.querySelector("#rgbSelector");

  setAppVersion();

  setDefaultValue();

  htmlSelector.addEventListener("input", () => {
    setColorOutput(htmlSelector.value);
    setHexadecimalCode(htmlSelector.value);
    setRGBCode(getColorBox());
  });
  
  rgbSelector.addEventListener("input", (e) => {
    if(e.target.matches(".section__input")) {
      if(e.target.matches("#redLevel")) {
        setLevelColor(0);
      }else if(e.target.matches("#greenLevel")) {
        setLevelColor(1);
      }else if(e.target.matches("#blueLevel")) {
        setLevelColor(2);
      }
      
      setRGBCode(getLevelColor());
      setColorOutput(getLevelColor());
      setHexadecimalCode(getHexadecimalColor());
      setHTMLSelector();
    }
  });
}

main();
