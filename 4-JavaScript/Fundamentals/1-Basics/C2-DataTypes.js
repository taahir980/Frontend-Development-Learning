
// Treat all JS code as newer version i.e ES6
"use strict";




// we are using nodejs, not browser, this is a browser function
// alert( 3 + 3) 





// Code readability should be high, nd this is not a good practice
// console.log(3 
//     +
//      3) 




//++++++++++ Writing semi-colon is not necessary ++++++++++

let userName = "hitesh"
let age = 18
let state
// console.table([userName, age, state]);




// ++++++++++ Re-initializing to different type is possible ++++++++++

let x = 12;
x = "hello";
x = true;
// console.log(x);





/* ++++++++++++ DataTypes ++++++++++++
    - Javascript is a dynamic language with dynamic types, they are not attached or associated with any perticular type.
    - Variables can assign and reassign values of any type.
    - That's why it is known as dynamically typed or weekly typed languge.
*/


// A) Primitive Types

/* 1) String 
      - Represent a series or collection of characters, which is enclosed within a single or double quote.
*/

let myName = "Tahir"          // Prefer Double quote
let myFatherName = 'Seim'
// console.log(myName, myFatherName);




/* 2) Numbers 
      - Represent number and can be written with or without decimal point.
      - All the numbers in javascript are floating point values.
      - Range is 2 power 56. 
*/

const compId = 645737;
const accBalance = 12.34244;
// console.log(compId, accBalance);




/* 3) BigInt 
      -  It represent values which is too large to be represented by the number primitive.
      - created by appending n to the end of an integer literal, or by calling the BigInt() function (without the new operator) and giving it an integer value or string of numbers value only.
      
*/

let bigNum = 898478742987472897489488n;
let bigBigNum = BigInt(8978947298748978);
let hugeString = BigInt("7845637676537676565") 
// console.log(bigNum, bigBigNum, hugeString);




/* 4) Boolean 
      -  It represents a logical entity, And have only two values i.e true & false
      - Generally used for conditional testing
*/

let isShopOpen = true;
let areYouMarried = false;
// console.log(isShopOpen, areYouMarried);




/* 5) Undefind
      - When a variable is declared but not assigned at that time it contains a special keyword provided by javascript i.e undefind
      - type of undefind is also undefind
*/

let myAge;
// console.log(myAge);
// console.log(typeof myAge);




/* 6) null 
      - Represents a non-existent or invalid value (Mein Khaali hoon).
      - Type of null is object
*/

let isEmpty = null;
// console.log(isEmpty);
// console.log(typeof isEmpty);




/* 7) Symbol 
      - It is a new datatype introduced in ES6 version of javascript.
      - It is used to store an anonymous and unique value.
      - type of symbol is symbol.
*/

const symbol1 = Symbol("trk");
const symbol2 = Symbol("trk");

// console.log(symbol1, symbol2);
// console.log(symbol1 === symbol2);




/* B) Non-Primitive
      - Primitive datatypes can store only a single value.
      - To store multiple and complex values, we use non primitive datatypes i.e Object
*/

var myObj = {
      Name : "Tahir Khan",
      age : 22,
      isWorking : true,
      greet : function () {
            console.log("Hello Namastey Asalamualeikum");
      }
}

console.log(myObj);
myObj.greet()

/*  Note 
      - Any data type which is not primitive data type, is of Object type in javascript.
      - There is a saying that everything in javascript is an object.
*/