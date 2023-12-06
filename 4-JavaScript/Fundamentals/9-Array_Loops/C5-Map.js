
const numsArr = [10, 20, 30, 40, 50];

const newNums = numsArr.map( (num) => (num + 1));
console.log(newNums);

// Chaining

const newNums2 = numsArr
                  .map( (num) => (num * 10))
                  .map( (num) => (num / 2))
                  .filter((num) => (num > 100));

console.log(newNums2);