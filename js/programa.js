/*********************************
 * Archivo: programa.js          *
 * Autor: Eduardo Alveo          *
 * Fecha-Modificado: 13-Feb-2021 *
 *********************************/
"use strict";

const VERSION_PROGRAMA = "1.1.0";
const COLOR_INICIAL = "#395c92";

/* Obteniendo elementos del HTML */
const cabeceraVersion = document.querySelector("#cabeceraVersion");
const salidaColor = document.querySelector("#salidaColor");
const etiquetaColorAzul = document.querySelector("#totalAzul");
const etiquetaColorRojo = document.querySelector("#totalRojo");
const etiquetaColorVerde = document.querySelector("#totalVerde");
const selectorHTML = document.querySelector("#htmlColor");
const selectorRGBAzul = document.querySelector("#colorAzul");
const selectorRGBRojo = document.querySelector("#colorRojo");
const selectorRGBVerde = document.querySelector("#colorVerde");
const etiquetaCodigoHexadecimal = document.querySelector("#codigoHexadecimal");
const etiquetaCodigoRGB = document.querySelector("#codigoRGB");

function establecerAtributoHTML(elementoHTML, atributo, valor) {
  elementoHTML.setAttribute(atributo, valor);
}

function establecerEstiloCSS(elementoHTML, propiedad, valor) {
  establecerAtributoHTML(elementoHTML,"style", `${propiedad}:${valor}`);
}

function establecerTextContent(elementoHTML, valor) {
  elementoHTML.textContent = valor;
}

function eventoInputRange(elemento, valor) {
  establecerTextContent(elemento, valor);
  establecerTextContent(etiquetaCodigoHexadecimal, obtenerColorHexadecimal(obtenerColorCampoRango()));
  establecerTextContent(etiquetaCodigoRGB, obtenerColorCampoRango());
  establecerEstiloCSS(salidaColor, "background-color", obtenerColorCampoRango());
}

function obtenerColorCampoDiv() {
  return salidaColor.style.backgroundColor;
}

function obtenerColorCampoRango() {
  const colorAzul = selectorRGBAzul.value;
  const colorRojo = selectorRGBRojo.value;
  const colorVerde = selectorRGBVerde.value;
  const colorRGB = `rgb(${colorRojo},${colorVerde},${colorAzul})`;
  
  return colorRGB;
}

function obtenerColorHexadecimal(cadena) {
  let finCiclo = false;
  
  let subCadena = "";
  let vectoNumeros = [0, 0, 0];
  
  let indiceCadena = 4;
  let indiceVector = 0;
  
  const limiteCadena = cadena.length;
  let limiteVector = vectoNumeros.length;
  
  let codigoHexadecimal = "#";
  
  while(finCiclo != true) {
    subCadena = cadena.charAt(indiceCadena);
    
    if(indiceCadena < limiteCadena) {
      if(subCadena !== ",") {
        if(subCadena === ")") {
          finCiclo = true;
        } else {
          vectoNumeros[indiceVector] += subCadena;
        }
      } else {
        indiceVector++;
      }
    }else {
      finCiclo = true;
    }
    
    indiceCadena++;
  }
  
  limiteVector = vectoNumeros.length;
  for(let i = 0; i < limiteVector; i++) {
    vectoNumeros[i] = Number(vectoNumeros[i]);
  }
  
  for(let i = 0; i < limiteVector; i++) {
    if(vectoNumeros[i] >= 16) {
      codigoHexadecimal += vectoNumeros[i].toString(16);
    } else {
      vectoNumeros[i] = vectoNumeros[i];
      codigoHexadecimal += "0" + vectoNumeros[i].toString(16);
    }
  }
  
  return codigoHexadecimal;
}

function obtenerColorInputColor() {
  return selectorHTML.value;
}

/* Inicializando Elementos del HTML con sus respectivos valores iniciales */
function inicializarElementosHTML() {
  /* mostrando la versión de la aplicación */
  establecerTextContent(cabeceraVersion, VERSION_PROGRAMA);
  
  /* estableciendo color predeterminado */
  establecerAtributoHTML(selectorHTML, "value", COLOR_INICIAL);
  establecerEstiloCSS(salidaColor, "background-color", COLOR_INICIAL);
  
  /* estableciendo valores mínimos y máximos a los campos de tipo range */
  establecerAtributoHTML(selectorRGBAzul, "min", 0);
  establecerAtributoHTML(selectorRGBAzul, "max", 255);
  establecerAtributoHTML(selectorRGBAzul, "value", 146);
  
  establecerAtributoHTML(selectorRGBRojo, "min", 0);
  establecerAtributoHTML(selectorRGBRojo, "max", 255);
  establecerAtributoHTML(selectorRGBRojo, "value", 57);
  
  establecerAtributoHTML(selectorRGBVerde, "min", 0);
  establecerAtributoHTML(selectorRGBVerde, "max", 255);
  establecerAtributoHTML(selectorRGBVerde, "value", 92);
  
  establecerTextContent(etiquetaColorAzul, selectorRGBAzul.value);
  establecerTextContent(etiquetaColorRojo, selectorRGBRojo.value);
  establecerTextContent(etiquetaColorVerde, selectorRGBVerde.value);
  
  /* estableciendo el código de color predeterminado para etiquetaCodigoHexadecimal y etiquetaCodigoRGB */
  establecerTextContent(etiquetaCodigoHexadecimal, COLOR_INICIAL);
  establecerTextContent(etiquetaCodigoRGB, obtenerColorCampoDiv());
}

window.addEventListener("load", inicializarElementosHTML, false);

/* Evento para el campo INPUT de tipo RANGE, aplicado al canal AZUL */
selectorRGBAzul.addEventListener("input", (evento) => {
  eventoInputRange(etiquetaColorAzul, evento.target.value);
});

/* Evento para el campo INPUT de tipo RANGE, aplicado al canal ROJO */
selectorRGBRojo.addEventListener("input", (evento) => {
  eventoInputRange(etiquetaColorRojo, evento.target.value);
});

/* Evento para el campo INPUT de tipo RANGE, aplicado al canal VERDE */
selectorRGBVerde.addEventListener("input", (evento) => {
  eventoInputRange(etiquetaColorVerde, evento.target.value);
});

/* Agregando un evento al campo selector de color */
selectorHTML.addEventListener("input", (evento) => {
  establecerTextContent(etiquetaCodigoRGB, obtenerColorCampoDiv());
  establecerTextContent(etiquetaCodigoHexadecimal, obtenerColorInputColor());
  establecerEstiloCSS(salidaColor, "background-color", obtenerColorInputColor());
});
