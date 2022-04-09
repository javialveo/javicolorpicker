"use strict";

const APP_VERSION = "0.0.6";
const label_version = document.querySelector("#versionApp");

const colorBox = document.querySelector("#colorBox");
const htmlSelector = document.querySelector("#htmlSelector");

const hexadecimalColor = document.querySelector("#hexaColor");
const rgbColor = document.querySelector("#rgbColor");


function setHexadecimalCode(color){
  hexadecimalColor.textContent = color;
}

function setBoxColor(color){
  colorBox.setAttribute("style", `background-color: ${color}`);
}


function main(){
  label_version.textContent = APP_VERSION;
}


main();

htmlSelector.addEventListener("input", () => {
  setBoxColor(htmlSelector.value);
  setHexadecimalCode(htmlSelector.value);
})