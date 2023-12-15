
const nums = [1,2,3,4];
// Only element > 2 will be pushed in the new array
const greterThanTwo = nums.filter((ele) => {
    return ele > 2;
});
console.log(greterThanTwo);

// Polyfill of filter
Array.prototype.myFilter = function(cb) {
    let temp= [];
    for(let i = 0; i<this.length; i++) {
        if(cb(this[i])) temp.push(this[i]);
    }
    return temp;
};

const nums2 = [1,2,3,4];
const lessThanTwo = nums2.myFilter((ele) => {
    return ele < 2;
});
console.log(lessThanTwo);
