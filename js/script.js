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
  const sauce = String(document.getElementById('sauce').value)
  const size = String(document.getElementById('size').value)

  const TAXRATE = 0.13

  const ketchup = 0.50
  const mustard = 0.93
  const relish = 0.50
  const sriracha = 0.14

  const small = 2.00
  const medium = 2.50
  const large = 3.00

  if (size == "small") {
    if (sauce == "ketchup") {
      const subtotal = small + ketchup
      const total = subtotal + (subtotal * TAXRATE)
      document.getElementById("answer").innerHTML = size + ": $" + (small).toFixed(2) + "<br> " + sauce + ": $" + ketchup.toFixed(2) + "<br> subtotal: $" + subtotal.toFixed(2) + " <br>total: $" + total.toFixed(2)
     }
     else if (sauce == "mustard") {
       const subtotal = small + mustard
       const total = subtotal + (subtotal * TAXRATE)
       document.getElementById("answer").innerHTML = size + ": $" + (small).toFixed(2) + "<br> " + sauce + ": $" + mustard.toFixed(2) + "<br> subtotal: $" + subtotal.toFixed(2) + " <br>total: $" + total.toFixed(2)
     }
     else if (sauce == "relish") {
       const subtotal = small + relish
       const total = subtotal + (subtotal * TAXRATE)
       document.getElementById("answer").innerHTML = size + ": $" + (small).toFixed(2) + "<br> " + sauce + ": $" + relish.toFixed(2) + "<br> subtotal: $" + subtotal.toFixed(2) + " <br>total: $" + total.toFixed(2)
     }
     else if (sauce == "sriracha") {
       const subtotal = small + sriracha
       const total = subtotal + (subtotal * TAXRATE)
       document.getElementById("answer").innerHTML = size + ": $" + (small).toFixed(2) + "<br> " + sauce + ": $" + sriracha.toFixed(2) + "<br> subtotal: $" + subtotal.toFixed(2) + " <br>total: $" + total.toFixed(2)
     }
     else  {
       const subtotal = small
       const total = subtotal + (subtotal * TAXRATE)
       document.getElementById("answer").innerHTML = size + ": $" + (small).toFixed(2) + "<br> " + sauce + ": $0.00" + "<br> subtotal: $" + subtotal.toFixed(2) + " <br>total: $" + total.toFixed(2)
     }
   }
  else if (size == "medium") {
    if (sauce == "ketchup") {
      const subtotal = medium + ketchup
      const total = subtotal + (subtotal * TAXRATE)
      document.getElementById("answer").innerHTML = size + ": $" + (medium).toFixed(2) + "<br> " + sauce + ": $" + ketchup.toFixed(2) + "<br> subtotal: $" + subtotal.toFixed(2) + " <br>total: $" + total.toFixed(2)
     }
     else if (sauce == "mustard") {
       const subtotal = medium + mustard
       const total = subtotal + (subtotal * TAXRATE)
       document.getElementById("answer").innerHTML = size + ": $" + (medium).toFixed(2) + "<br> " + sauce + ": $" + mustard.toFixed(2) + "<br> subtotal: $" + subtotal.toFixed(2) + " <br>total: $" + total.toFixed(2)
     }
     else if (sauce == "relish") {
       const subtotal = medium + relish
       const total = subtotal + (subtotal * TAXRATE)
       document.getElementById("answer").innerHTML = size + ": $" + (medium).toFixed(2) + "<br> " + sauce + ": $" + relish.toFixed(2) + "<br> subtotal: $" + subtotal.toFixed(2) + " <br>total: $" + total.toFixed(2)
     }
     else if (sauce == "sriracha") {
       const subtotal = medium + sriracha
       const total = subtotal + (subtotal * TAXRATE)
       document.getElementById("answer").innerHTML = size + ": $" + (medium).toFixed(2) + "<br> " + sauce + ": $" + sriracha.toFixed(2) + "<br> subtotal: $" + subtotal.toFixed(2) + " <br>total: $" + total.toFixed(2)
     }
     else  {
       const subtotal = medium
       const total = subtotal + (subtotal * TAXRATE)
       document.getElementById("answer").innerHTML = size + ": $" + (medium).toFixed(2) + "<br> " + sauce + ": $0.00" + "<br> subtotal: $" + subtotal.toFixed(2) + " <br>total: $" + total.toFixed(2)
     }
   }
  else{
    if (sauce == "ketchup") {
      const subtotal = large + ketchup
      const total = subtotal + (subtotal * TAXRATE)
      document.getElementById("answer").innerHTML = size + ": $" + (large).toFixed(2) + "<br> " + sauce + ": $" + ketchup.toFixed(2) + "<br> subtotal: $" + subtotal.toFixed(2) + " <br>total: $" + total.toFixed(2)
     }
     else if (sauce == "mustard") {
       const subtotal = small + mustard
       const total = subtotal + (subtotal * TAXRATE)
       document.getElementById("answer").innerHTML = size + ": $" + (small).toFixed(2) + "<br> " + sauce + ": $" + mustard.toFixed(2) + "<br> subtotal: $" + subtotal.toFixed(2) + " <br>total: $" + total.toFixed(2)
     }
     else if (sauce == "relish") {
       const subtotal = large + relish
       const total = subtotal + (subtotal * TAXRATE)
       document.getElementById("answer").innerHTML = size + ": $" + (large).toFixed(2) + "<br> " + sauce + ": $" + relish.toFixed(2) + "<br> subtotal: $" + subtotal.toFixed(2) + " <br>total: $" + total.toFixed(2)
     }
     else if (sauce == "sriracha") {
       const subtotal = large + sriracha
       const total = subtotal + (subtotal * TAXRATE)
       document.getElementById("answer").innerHTML = size + ": $" + (large).toFixed(2) + "<br> " + sauce + ": $" + sriracha.toFixed(2) + "<br> subtotal: $" + subtotal.toFixed(2) + " <br>total: $" + total.toFixed(2)
     }
     else  {
       const subtotal = large
       const total = subtotal + (subtotal * TAXRATE)
       document.getElementById("answer").innerHTML = size + ": $" + (large).toFixed(2) + "<br> " + sauce + ": $0.00" + "<br> subtotal: $" + subtotal.toFixed(2) + " <br>total: $" + total.toFixed(2)
     }
   }
  
}
