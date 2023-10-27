// Chapter2 JS
// Exercise 2:1
let str1 = 'Laurence';
console.log(typeof (str1));
let str2 = "Svekis";
console.log(typeof (str2));
let val1 = undefined;
console.log(typeof (val1));
let val2 = null;
console.log(typeof (val2));
let myNum = 1000;
console.log(typeof (myNum));


// Exercise 2:2
const myName = "Maaike";
const myAge = 29;
const coder = true;
const message = "Hello, my name is " + myName + ", I am " + myAge + " years old and I can code JavaScript: " + coder + ".";
console.log(message);

// Exercise 2:3
let a = window.prompt("Value 1?");
let b = window.prompt("Value 2?");
a = Number(a);
b = Number(b);
let hypotenuseVal = ((a * a) + (b * b)) ** 0.5;
console.log(hypotenuseVal);

// Exercise 2:4
let x = 4;
let y = 11;
let z = 21;
x = x + y;
x = x / y;
z = z % y;
console.log(x, y, z);

// Chapter Project1
//Convert miles to kilometers. 
//1 mile equals 1.60934 kilometers.
let myDistanceMiles = 130;
let myDistanceKM = myDistanceMiles * 1.60934;
console.log("The distance of " + myDistanceMiles + " miles is equal to " + myDistanceKM + " kilometers");



// Chapter Project2
// BMI calculator
//1 inch = 2.54 centimetres.
//2.2046 pounds in a kilo
let inches = 72;
let pounds = 180;
let weight = pounds / 2.2046; // in kilos
let height = inches * 2.54; // height in centimetres
console.log(weight, height);
let bmi = weight / (height / 100 * height / 100);
console.log(bmi);



