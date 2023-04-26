"use strict";

window.addEventListener("load", initApp);

function initApp() {
  console.log("JavaScript kører!");
  secondFunction();
}

function secondFunction() {
  console.log("Anden funktion!");
  thirdFunction();
}

function thirdFunction() {
  console.log("Tredje funktion!");
}
