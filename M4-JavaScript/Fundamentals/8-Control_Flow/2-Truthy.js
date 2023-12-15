
const name = 'Tahir';

// In this scenario compiler assumes that it is a non-empty string, so that it is true statement
if(name) {
      // console.log(`My name is ${name}`);
}


/* ++++++++  Falsy Values  ++++++++

   - false keyword
   -  0
   - (-0)
   - BigInt 0n
   - null
   - undefind 
   - NaN
   - empty string

   * These are all falsy values, others are truthy, That means whenever in conditioal statement, checks the above values, it always evalutes the above values as false.
*/

/* ++++++++  Truthy Values  ++++++++

   - "0"
   -  'false'
   - " "
   - []
   - {}
   - function (){}
*/

if(function(){}) {
      console.log("Truthy Values");
}


// Checking Array Emptiness

let arr = [];

if(arr.length === 0) {
      // console.log("Array is empty");
}


// Checking Object Emptiness

let obj = {};

if(Object.keys(obj).length === 0) {
      // console.log("Object is empty");
}
