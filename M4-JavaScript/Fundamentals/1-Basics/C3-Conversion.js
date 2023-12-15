

// +++++++ Conversion Into Number +++++++

let value1 = "123";
let convert = Number(value1); 

// console.log(convert);

/* Conversion of different values into number:

  "12345"  ->  12345
  "33abc"  ->  NaN , type of NaN is number
  true     ->  1
  false    ->  0
  undefind ->  NaN
*/




// +++++++ Convesrion Into String +++++++

let value2 = undefined;

let convert2 = String(value2);
// console.log(convert2);

/*
  33      -> "33"
  keyword -> "keyword"  
*/




// +++++++ Convesrion Into Boolean +++++++

let value3 = undefined;

let convert3 = Boolean(value3);
// console.log(convert3);

/* 
  1        -> true
  0        -> false
  number   -> true
  ""       -> false
  "string" -> true
  undefind -> flase 
*/





// +++++++ More Syntax in Javascript +++++++

let num = 33;
let num2 = -num;
// console.log(num2);


// Concatenate
let str1 = "Hello";
let str2 = " World";
// console.log(str1 + str2);


// 2 to the power 4
// console.log(2**4);




// +++++++ Convert to string is Very Intresting +++++++

// console.log(1 + "2");
// console.log("1" + 2);

// 122, first it will encounter string and convert all of them into string
// console.log("1" + 2 + 2);

// 32, first perform arithmetic opeartion, then convert to string
// console.log(1 + 2 + "2");




// +++++++ Bad Practices +++++++

// console.log(+true);            // Not a good practice/conversion, but print 1
// console.log(+"");             // 0


let n1, n2, n3, n4;
n1 = n2 = n3 = n4 = 9;              // Very bad practice
// console.log(n1, n2, n3, n4);    // Code readibility is zero



/*    ++++++++++  Implicit Type Coercion ++++++++++
  - It is the autmatic conversion of value from one data-type to another
*/