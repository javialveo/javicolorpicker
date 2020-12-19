/*********************************
 * Archivo: programa.js          *
 * Autor: Eduardo Alveo          *
 * Versión: 0.2.0                *
 * Fecha-Modificado: 19-dic-2020 *
 *********************************/
"use strict";

const APP_VERSION = "0.2.1";

const selectorColor = document.querySelector("#selectorColor");
const salidaColor = document.querySelector("#salidaColor");

/* Imprime el código del color en formato Hexadecimal */
function mostrarCodigoColorHexadecimal(codigoColor) {
  const enHexadecimal = document.querySelector("#enHexadecimal");
  
  enHexadecimal.textContent = codigoColor;
}

function mostrarCodigoColorRGB() {
  const enRGB = document.querySelector("#enRGB");
  enRGB.textContent = salidaColor.style.backgroundColor;
}

/* Muestra el color que ha seleccionado el usuario */
function mostrarColor(evento) {
  salidaColor.style.backgroundColor = evento.target.value;
  mostrarCodigoColorHexadecimal(selectorColor.value);
  mostrarCodigoColorRGB();
}

/* Establece un color inicial para mis elementos Div e Input */
function mostrarColorInicial(codigoColor) {
  selectorColor.value = codigoColor;
  salidaColor.style.backgroundColor = codigoColor;
}

/* actualiza la versión de la aplicación, cuando que se requiera */
function mostrarVersionApp() {
  const versionApp = document.querySelector("#versionApp");
  
  versionApp.textContent = APP_VERSION;
}

/* Permite obtener un código de color en Hexadecimal, 
 * obteniendolo desde un input del tipo color. */
function obtenerColor() {
  return selectorColor.value;
}

function seleccionarColor() {
  selectorColor.addEventListener("input", mostrarColor, false);
  selectorColor.addEventListener("change", mostrarColor, false);
}

/* función principal, que será ejecutada a través del evento onLoad de window */
function main() {
  mostrarVersionApp();
  mostrarColorInicial("#000000");
  mostrarCodigoColorHexadecimal("#000000");
  mostrarCodigoColorRGB();
  seleccionarColor();
}

window.addEventListener("load", main, false);
