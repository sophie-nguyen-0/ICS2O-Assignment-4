// Created by: sophie
// Created on: oct 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Assignment-4/sw.js", {
    scope: "/ICS2O-Assignment-4/",
  })
}

/**
 * this function
 */
function myButtonClicked() {
  const sauce = String(document.getElementById("sauce").value)
  const size = String(document.getElementById("size").value)

  const TAXRATE = 0.13

  const ketchup = 0.5
  const mustard = 0.93
  const relish = 0.5
  const sriracha = 0.14

  const small = 2.0
  const medium = 2.5
  const large = 3.0
}
