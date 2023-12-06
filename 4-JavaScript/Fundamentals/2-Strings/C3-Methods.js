
// Important String Methods

let myName = "Bruce Wayne";


// 1) Finding the length of a string
// console.log(myName.length);




// 2) Retrieving a specific string character

// console.log(myName[4]);
// console.log(myName.at(33));            // For invalid index 1st two gives undefind
// console.log(myName.charAt(9));        // But this gives empty string





// 3) Testing if a string contains a substring

const browserName = "Chrome";

// if(browserName.includes("Chu"))
//       console.log("Found");
// else
//       console.log("Not Found");





// 4) Starts With &  Ends with

// if (browserName.startsWith("Chr")) {
//       console.log("Yes");
// } 
// else {
// console.log("No");
// }  


// if (browser.endsWith("ome")) {
//       console.log("Yes");
// } 
// else {
// console.log("No");
// } 





// 5 - Finding the position of a substring in a string 

const str = "My name is tahir khan and my family name is khan";

// If the string contains the substring, indexOf() returns the index of the first occurrence of the substring. If the string does not contain the substring, it returns -1.
// console.log(str.indexOf("tahir"));
// console.log(str.indexOf("jahir"));


// To find subsequent string (Simillar substring), after the 1st occurance

let firstOcc = str.indexOf("khan")
let lastOcc = str.indexOf("khan", firstOcc + 1); // Here it will start searching from 18th index. 

// console.log(firstOcc);
// console.log(lastOcc);   





// 6 - Extracting a substrings from a string

const str2 = 'The quick brown fox jumps over the lazy dog.';

// console.log(str2.slice(31));
// // Starts extracting from 31 index

// console.log(str2.slice(4, 19));
// // from 4 - 19 index

// console.log(str2.slice(-4));
// // Go backward

// console.log(str2.slice(-9, -5));  





// 8 - Changing case

const myName2 = "Tahir";

// console.log(myName2.toUpperCase());
// console.log(myName2.toLowerCase());
// console.log(myName2);                // Doesn't affect the original value  





// 9 - Updating parts of String

const browserType = "mozilla";

// console.log(browserType.replace("moz", "van"));
// console.log(browserType); 

// If the pattern is an empty string, the replacement is prepended to the start of the string.
const myStr = "xxx ";
// console.log(myStr.replace("", "_"));