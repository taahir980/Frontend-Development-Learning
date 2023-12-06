

/*       Nullish Coalescing Operator (??) : null, undefind
    - Used when if some database returns value in null or undefind , it further creates problem in our program
    - To Prevent these types of Error we use this operator
    - The second value is preventive value
*/


let val;

// val = 5 ?? 10;
// val = null ?? 10;
// val = undefined ?? 20;
val = undefined ?? 20 ?? 30;

console.log(val);




// Ternary Operator
// condition ? true : false;

const balance = 0;

balance != 0 ? console.log("I have some money") : console.log("I don't have any money");

