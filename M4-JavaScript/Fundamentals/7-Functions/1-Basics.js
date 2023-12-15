
// +++++++++ Declaring a Function +++++++++

function print() {
      console.log("Hello, World");
}

// Function Reference - memomry address of the function
// print
// print()             //  Function Call or Execution



function square(num = 3) {   // Default Parameter
      return num * num;
}

const value1 = square(4);
const value2 = square();
// console.log(value1, value2);





// +++++++++ Rest Operator +++++++++

function calculateCartPrice(val1, val2, ...num1) {
      // console.log(typeof num1);        // object
      return num1                         // return type is array
}
  
// console.log(calculateCartPrice(200, 400, 500, 2000))





// +++++++++ Object in Function +++++++++

const phonepUser = {
      name : "Tahir",
      balance : "xxx",
      location: "Odisha"
}

function handleObject(anyObj) {
      console.log(`Here the user name is ${anyObj.name} & Balace is ${anyObj.balance}`);
}

handleObject(phonepUser);

// handleObject({
//       name : "Chada",
//       balance : "Gareeb",
//       location : "Kakatpur"
// });





// +++++++++ Passing an Array +++++++++

const arr = [10, 20, 30, 40];

function handleArray(anyArray) {
      return anyArray[0];
}

console.log(handleArray(arr));
console.log(handleArray([11, 22, 33, 44]));
