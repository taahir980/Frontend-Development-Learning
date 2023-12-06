
// Checking the given argument is array or not
console.log(Array.isArray("Hitesh"))


let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3)); // Convert this variable values into array


const indian_heros = ["Hatim Tai", "ShaktiMaan", "Ra-one", "Son-Pari"];
const indian_villains = ["Kilbis", "G-one"];

// indian_heros.push(indian_villains);   // Make Nested Array
// console.log(indian_heros);
// console.log(indian_heros[4][0]);     // Accessing Nested array Elements





// +++++++++++++++++++++++ CONCAT +++++++++++++++++++++++++++ 
// Combines two or more arrays values into one. This method returns a new array without modifying any existing arrays.

const newArr = indian_heros.concat(indian_villains, ["aaa", 12, true]);
console.log(newArr);
console.log(indian_heros);





// ++++++++++++++++  SPREAD OPERATOR +++++++++++++++
// Spread the elements of the both array

const newArr2 = [...indian_heros, ...indian_villains];
console.log(newArr2);





// +++++++++++++++++++++  FLAT  ++++++++++++++++++++++++
// Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.


const another_array = [1, 3, 8, [5, 6], 9, 11, [14, 17, 19, [22, 27]], 33];


// We can specify it's depth, but infinity automatically flat all depth array.
const flated_Array = another_array.flat(Infinity); 
console.log(flated_Array);





// +++++++++++++ DOUBT ++++++++++++++

// console.log(Array.from("Hitesh"))         // Converts each character into array elements
// console.log(Array.from({name: "hitesh"})) // empty array
