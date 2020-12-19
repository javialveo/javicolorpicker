/*********************************
 * Archivo: programa.js          *
 * Autor: Eduardo Alveo          *
 * Versión: 0.2.1                *
 * Fecha-Modificado: 19-dic-2020 *
 *********************************/
"use strict";

const APP_VERSION = "0.2.2";

const selectorColor = document.querySelector("#selectorColor");
const salidaColor = document.querySelector("#salidaColor");

/* Imprime el código del color en formato Hexadecimal */
function mostrarCodigoColorHexadecimal(codigoColor) {
  const enHexadecimal = document.querySelector("#enHexadecimal");
  
  enHexadecimal.textContent = codigoColor;
}

/* Imprime el código de un color en formato RGB obtenido desde el div "salidaColor" */
function mostrarCodigoColorRGB() {
  const enRGB = document.querySelector("#enRGB");
  enRGB.textContent = salidaColor.style.backgroundColor;
}

/* Muestra el color que ha seleccionado el usuario */
function mostrarColor(evento) {
  salidaColor.style.backgroundColor = evento.target.value;
  mostrarCodigoColorHexadecimal(obtenerColor());
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

/* Agrega eventos al "selectorColor", para obtener el color seleccionado
 * por el usuario y sus respectivos códigos en Hexadecimal y RGB */
function seleccionarColor() {
  selectorColor.addEventListener("input", mostrarColor, false);
  selectorColor.addEventListener("change", mostrarColor, false);
}

/* función principal, que será ejecutada a través del evento onLoad de window */
function main() {
  // Imprime la última versión del programa en el HTML
  mostrarVersionApp();
  
  // Establece valores por defecto al cargar la web
  mostrarColorInicial("#000000");
  mostrarCodigoColorHexadecimal("#000000");
  mostrarCodigoColorRGB();
  
  // llamada a la función que permite obtener el color seleccionado por el usuario
  seleccionarColor();
}

window.addEventListener("load", main, false);
