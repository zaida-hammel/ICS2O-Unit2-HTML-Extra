// Created by: Zaida Hammel
// Created on: March 2022
// This file contains the JS functions for index.html

/**
 * Find area and perimeter.
 */
function doMathClicked() {
  document.getElementById('area').innerHTML = '<p>The area is: ' + (5 * 3) + " cm²" + '</p>'
  document.getElementById('perimeter').innerHTML = '<p>The perimeter is: ' + (5 + 3 + 5 + 3) + " cm" + '</p>'
}