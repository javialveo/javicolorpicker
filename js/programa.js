/*********************************
 * Archivo: programa.js          *
 * Autor: Eduardo Alveo          *
 * Fecha-Modificado: 23-Dic-2020 *
 *********************************/
"use strict";

const VERSION_PROGRAMA = "1.0.1";
const COLOR_INICIAL = "#395c92";

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
const parrafoHexadecimal = document.querySelector("#parrafoHexadecimal");
const parrafoRGB = document.querySelector("#parrafoRGB");

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
  establecerTextContent(parrafoHexadecimal, obtenerColorHexadecimal(obtenerColorCampoRango()));
  establecerTextContent(parrafoRGB, obtenerColorCampoRango());
  establecerEstiloCSS(columnaColorDiv, "background-color", obtenerColorCampoRango());
}

function obtenerColorCampoDiv() {
  return columnaColorDiv.style.backgroundColor;
}

function obtenerColorCampoRango() {
  const colorAzul = campoInputAzul.value;
  const colorRojo = campoInputRojo.value;
  const colorVerde = campoInputVerde.value;
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
  return campoInputColor.value;
}

/* Inicializando Elementos del HTML con sus respectivos valores iniciales */
function inicializarComponentes() {
  /* mostrando la versión de la aplicación */
  establecerTextContent(cabeceraVersion, VERSION_PROGRAMA);
  
  /* estableciendo color predeterminado */
  establecerAtributoHTML(campoInputColor, "value", COLOR_INICIAL);
  establecerEstiloCSS(columnaColorDiv, "background-color", COLOR_INICIAL);
  
  /* estableciendo valores mínimos y máximos a los campos de tipo range */
  establecerAtributoHTML(campoInputAzul, "min", 0);
  establecerAtributoHTML(campoInputAzul, "max", 255);
  establecerAtributoHTML(campoInputAzul, "value", 146);
  
  establecerAtributoHTML(campoInputRojo, "min", 0);
  establecerAtributoHTML(campoInputRojo, "max", 255);
  establecerAtributoHTML(campoInputRojo, "value", 57);
  
  establecerAtributoHTML(campoInputVerde, "min", 0);
  establecerAtributoHTML(campoInputVerde, "max", 255);
  establecerAtributoHTML(campoInputVerde, "value", 92);
  
  establecerTextContent(campoEtiquetaAzul, campoInputAzul.value);
  establecerTextContent(campoEtiquetaRojo, campoInputRojo.value);
  establecerTextContent(campoEtiquetaVerde, campoInputVerde.value);
  
  /* estableciendo el código de color predeterminado para parrafoHexadecimal y parrafoRGB */
  establecerTextContent(parrafoHexadecimal, COLOR_INICIAL);
  establecerTextContent(parrafoRGB, obtenerColorCampoDiv());
}

window.addEventListener("load", inicializarComponentes, false);

/* Evento para el campo INPUT de tipo RANGE, aplicado al canal AZUL */
campoInputAzul.addEventListener("input", (evento) => {
  eventoInputRange(campoEtiquetaAzul, evento.target.value);
});

/* Evento para el campo INPUT de tipo RANGE, aplicado al canal ROJO */
campoInputRojo.addEventListener("input", (evento) => {
  eventoInputRange(campoEtiquetaRojo, evento.target.value);
});

/* Evento para el campo INPUT de tipo RANGE, aplicado al canal VERDE */
campoInputVerde.addEventListener("input", (evento) => {
  eventoInputRange(campoEtiquetaVerde, evento.target.value);
});

/* Agregando un evento al campo selector de color */
campoInputColor.addEventListener("input", (evento) => {
  establecerTextContent(parrafoRGB, obtenerColorCampoDiv());
  establecerTextContent(parrafoHexadecimal, obtenerColorInputColor());
  establecerEstiloCSS(columnaColorDiv, "background-color", obtenerColorInputColor());
});
