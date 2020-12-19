/*********************************
 * Archivo: programa.js          *
 * Autor: Eduardo Alveo          *
 * Versión: 0.1.0                *
 * Fecha-Modificado: 19-dic-2020 *
 *********************************/
"use strict";


function obtenerColor() {
  const selectorColor = document.querySelector("#selectorColor");
  
  console.log(selectorColor.select());
  
  return selectorColor.value;
}

function mostrarColor(evento) {
  const ctColor = document.querySelector("#ctColor");
  
  ctColor.style.backgroundColor = evento.target.value;
}

function mostrarColorDefecto(codigoColor) {
  const ctColor = document.querySelector("#ctColor");
  
  ctColor.style.backgroundColor = codigoColor;
}

function establecerColorDefecto() {
  const selectorColor = document.querySelector("#selectorColor");
  
  selectorColor.addEventListener("input", mostrarColor, false);
}

function actualizarColor() {
  const selectorColor = document.querySelector("#selectorColor");
  
  selectorColor.addEventListener("change", mostrarColor, false);
}

window.onload = function() {
  mostrarColorDefecto(obtenerColor());
  actualizarColor();
}
