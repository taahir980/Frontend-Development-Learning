

// ++++++++ Automatic Conversion ++++++++

// console.log("2" >= 2);
// console.log("02" > 2);

/*
  -> Equality check == and comparision i.e >, <, >=, <= works differently in javascript
  -> Comparision converts null to a number, treating it as 0.
  -> that's why (null >= 0) is true
  -> Most imporatnt thing is, comparing different types of data isn't good practice
  -> That's why most programming language  doesn't supports it
*/

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);



// ++++++++ Strict Check ++++++++
// It doesn't consider another type values, only check for simillar type of vlaues

console.log(2 == "2");
console.log(2 === "2");



/*   ++++++++  Difference between '==' & '===' operator ++++++++

  - Both are comparision operator.
  - '==' do some internal manipulation to different type of data doesn't care that much about simillar type.
  - But in strict '===' it compares only simillar types of values.
*/