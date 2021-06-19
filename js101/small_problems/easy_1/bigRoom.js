/*
Problem = Build a program that asks the user to enter the length and width
of a room in meters, and then logs the area of the room to the console in
both square meters and square feet. 
- 1 sq meter == 10.7639 sq ft
- Do not worry about validating the inut at this time.
- Use the readlineSync.prompt method to collect user input
*/

const input = require('readline-sync');
const length = input.question("Enter the length of the room in meters:");
const width = input.question("Enter the width of the room in meters:");
const area_sm = length * width;
const area_sf = area_sm * 10.7639;
console.log(`The area of the room is ${area_sm} square meters (${area_sf} square feet).`)

/* Solution
let readlineSync = require("readline-sync");

const SQMETERS_TO_SQFEET = 10.7639;

console.log("Enter the length of the room in meters:");
let length = readlineSync.prompt();
length = parseInt(length, 10);

console.log("Enter the width of the room in meters:");
let width = readlineSync.prompt();
width = parseInt(width, 10);

let areaInMeters = (length * width);
let areaInFeet = (areaInMeters * SQMETERS_TO_SQFEET);

console.log(
  `The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet).`
);
*/