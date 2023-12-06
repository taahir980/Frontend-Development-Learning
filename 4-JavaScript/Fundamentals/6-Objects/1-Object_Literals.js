
// +++++++++ Object Literal Declaration +++++++++


const mySym = Symbol("Key1")           // Symbol Declaration

const user = {
    name : "Tahir",
    [mySym] : "Khan",                  // Symbol Syntax
    "full name" : "Tahir Khan",
    "age" : 22,
    isLearning : true,
    greeting: function() {
        console.log("Hello")
    }
};

// console.log(user);
// console.log(user[mySym]);            // Accessing Symbol Value

  



// +++++++++ Accessing Object Properties +++++++++ 

// console.log(user.name);
// console.log(user["name"]);

// console.log(user.full name);            // this is not possible
// console.log(user["full name"]);        // only way of accessing
// console.log(user.age);





// +++++++++ Modifying Object Properties +++++++++

// user.age = 27;
// user["age"] = 33;
// console.log(user);              // In both way possible


// After freezing the object, we can't modify the Object by Any Way like properties, values, keys etc.
// Object.freeze(user);

// user.age = 44;
// console.log(user);





// +++++++++ Object Method Call +++++++++

// user.greeting();

// it returns whole function as value
// user.greeting;




// +++++++++  Nested Object  +++++++++

const address = {
    street: "123 Main St",
    city: "Exampleville",
    zipCode: "12345",
};

const person = {
    firstName: "Alice",
    lastName: "Johnson",
    address: address,
};

// console.log(person.address.street);







