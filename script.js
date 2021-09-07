"use strict";
window.addEventListener("DOMContentLoaded", start);
function start() {
  console.log("program works");
  selectHex();
}
function selectHex() {
  //user selects color and it writes it in the input
  console.log("selectHexWOrks");
  let colorInput = document.querySelector("#color");
  let hexInput = document.querySelector("#hex");

  colorInput.addEventListener("input", () => {
    let color = colorInput.value;
    hexInput.value = color;
    document.body.style.backgroundColor = color;
    getHex(color);
  });
}
function getHex(color) {
  console.log("function get color works");
  console.log(color);
  //   return color;
  splitcolor(color);
}
function splitcolor(color) {
  let array = color.split("");
  console.log(array);
  let splitColors = getletters(array);
  console.log(splitColors);
  splitColorInRGB(splitColors);
}
function getletters(array) {
  let red = array[1] + array[2];
  let green = array[3] + array[4];
  let blue = array[5] + array[6];
  return { red, green, blue };
}
function splitColorInRGB(splitColors) {
  let red = parseInt(splitColors.red, 16);
  let green = parseInt(splitColors.green, 16);
  let blue = parseInt(splitColors.blue, 16);
  const Colors = {
    r: `${red}`,
    g: `${green}`,
    b: `${blue}`,
  };
  console.log(Colors);
  readRGB(Colors);
  readHSL(Colors);
}
function readRGB(object) {
  console.log(object);
  let rgbInput = document.querySelector("#RGB");
  let color = object.r + "," + object.g + "," + object.b;
  console.log(color);
  rgbInput.value = color;
}
function readHSL(object) {
  console.log(object);
  let r = object.r / 255;
  console.log(r);
  let g = object.g / 255;
  let b = object.b / 255;
  let h, s, l;

  const min = Math.min(r, g, b);
  // console.log(min);
  const max = Math.max(r, g, b);
  // console.log(max);

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;

  Math.floor(h);
  // Math.round(s);
  console.log(s);
  // round(h, s, l);
  // function round(h, s, l) {
  //   Math.floor(h);
  //   Math.round(s);
  //   Math.round(l);
  // }

  console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing
  let hslInput = document.querySelector("#hsl");
  let color = Math.floor(h) + "," + Math.floor(s) + "," + Math.floor(l);
  console.log(color);
  hslInput.value = color;
}
