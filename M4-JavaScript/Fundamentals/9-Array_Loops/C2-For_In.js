

const myObj = {
      js : 'JavaScript',
      cpp : 'Cplusplus',
      java : 'java',
      py : 'Python'
};


// Itrating Over Object

for (const key in myObj) {
      // console.log(key, myObj[key]);
}

// Destructuring Key's in Object - prints each character of Key's

for (const [key, val, val2] in myObj) {
      // console.log(key, val, val2);
}




// Itrating over Array

const myArr = [12, 14, 16, 18, 20, 22, 23, 24, 26, 27, 28, 29];

for (const key in myArr) {
      // console.log(key, myArr[key]);
}

// Destructuring Index in Array - prints each digit of index

for (const [key, val] in myArr) {
      // console.log(key, val);
}


// Itrating over Maps

const map = new Map();

map.set(1, "AUS")
map.set(2, "IND")
map.set(3, "SA")
map.set(3, "SA")

for (const key in map) {
      // console.log(key);
}

// * In this way Maps are not itrable

