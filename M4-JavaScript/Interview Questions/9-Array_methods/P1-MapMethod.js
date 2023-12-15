
const nums = [1,2,3,4];
const multiplyFour = nums.map((ele, i, arr) => {
    return ele * 4;
});
console.log(multiplyFour);

// Polyfill of Map
Array.prototype.myMap = function(cb) {
    let temp= [];
    for(let i = 0; i<this.length; i++) {
        temp.push(cb(this[i], i, this));
    }
    return temp;
};

const nums2 = [1,2,3,4];
const addFive = nums2.myMap((cur, i, arr) => {
    return cur + 5;
});
console.log(addFive);