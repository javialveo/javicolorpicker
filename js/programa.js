/*********************************
 * Archivo: programa.js          *
 * Autor: Eduardo Alveo          *
 * Versión: 0.3.0                *
 * Fecha-Modificado: 20-Dic-2020 *
 *********************************/
"use strict";

const APP_VERSION = "0.3.0";
const COLOR_NEGRO = "#000000";

/* Obteniendo elementos del HTML */
const cabeceraVersion = document.querySelector("#cabeceraVersion");
const columnaColorDiv = document.querySelector("#columnaColorDiv");
const campoEtiquetaAzul = document.querySelector("#campoEtiquetaAzul");
const campoEtiquetaRojo = document.querySelector("#campoEtiquetaRojo");
const campoEtiquetaVerde = document.querySelector("#campoEtiquetaVerde");
const campoInputColor = document.querySelector("#campoInputColor");
const campoInputAzul = document.querySelector("#campoInputAzul");
const campoInputRojo = document.querySelector("#campoInputRojo");
const campoInputVerde = document.querySelector("#campoInputVerde");

function configurandoCampoTipoRango(elemento,atributo, valor) {
  elemento.setAttribute(atributo, valor);
}

function inicializar() {
  /* Mostrando la versión del programa */
  cabeceraVersion.textContent = APP_VERSION;
  
  /* Inicializando colores por defecto */
  columnaColorDiv.style.backgroundColor = COLOR_NEGRO;
  campoInputColor.value = COLOR_NEGRO;
  
  /* Inicializando los campos de tipo rango */
  configurandoCampoTipoRango(campoInputAzul, "min", 0);
  configurandoCampoTipoRango(campoInputAzul, "max", 255);
  
  configurandoCampoTipoRango(campoInputRojo, "min", 0);
  configurandoCampoTipoRango(campoInputRojo, "max", 255);
  
  configurandoCampoTipoRango(campoInputVerde, "min", 0);
  configurandoCampoTipoRango(campoInputVerde, "max", 255);
  
  /* Inicializando las etiquetas asociadas a los rangos */
  campoEtiquetaAzul.textContent = campoInputAzul.value;
  campoEtiquetaRojo.textContent = campoInputRojo.value;
  campoEtiquetaVerde.textContent = campoInputVerde.value;
}

window.addEventListener("load", inicializar, false);
