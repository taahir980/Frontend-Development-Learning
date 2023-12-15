
// ++++++++ DataTypes ++++++++
// Primitive types number, string, boolean, null, undefind, symbol, bigInt

let str = "Hello"
let num = 123
let isThere = true
const bigNumber = 298789787489789427n;

console.log(typeof str, typeof num, typeof isThere, typeof bigNumber, typeof undefined, typeof null);


// ++++++++ Symbol ++++++++

const id = Symbol("123");
const idTwo = Symbol("123");

// console.log(id === idTwo);     // false, value of these two symbol are equal but not the symbol
// console.log(typeof id);



// ++++++++ Non-primitive (Reference Type) ++++++++

function print() {
      console.log("Namastey ji");
};

const obj = {
      name : "KK",
      age : 47,
};

const arr = ["Ramesh", "Suresh", "Akash"];
// console.log(typeof print, typeof obj, typeof arr);