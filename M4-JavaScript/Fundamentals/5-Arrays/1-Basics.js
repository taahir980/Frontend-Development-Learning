
// ++++++++++++++ DECLARATION ++++++++++++++++

const myArr = [12, 16, true, "khan"];
const myArr2 = new Array(1, 3, 5, 7);
console.log(myArr, myArr2, myArr[2], myArr2[3]); 





// +++++++++++++++++++++ METHODS +++++++++++++++


const numArr = [1, 3, 5, 7, 9, 11, 11];


//  Push & Pop Operation

numArr.push("Tahir");
numArr.push(false);
console.log(numArr);
numArr.pop();
console.log(numArr);  



// Shift & Unshift Opeartion

console.log(numArr.unshift(44));
console.log(numArr);        // This not good thing to do because it will shift all the value and add the element at first index, Imagine if array contains Millions of number
console.log(numArr.shift());
numArr.shift();
console.log(numArr);  



// Include - check whether element is present or not & Return Boolean
console.log(numArr.includes(7, 2)); 


// IndexOf - If present - index of the element, otherwise -1 and if element present multiple times 1st Occurance
console.log(numArr.indexOf(33));  


// Join - will convert the array into string
const newArr = numArr.join();
console.log(newArr);           



// Slice & Splice

const myn1 = numArr.slice(1, 4);   // Slice index is 1, 2 & 3 exclude 4, Means From numArr take the elements of 1st, 2nd & 3rd index and store it in myn1.
console.log(myn1);
console.log(numArr);


const myn2 = numArr.splice(1, 4);  // Splice index 1, 2, 3 & 4, But completely from original array
console.log(myn2);
console.log(numArr);








