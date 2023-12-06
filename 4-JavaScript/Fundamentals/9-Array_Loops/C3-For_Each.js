
const languages = ["Odia", "Urdu", "Hindi", "English"];



// For-each is array method which itrate through array items

// languages.forEach( function (items) {
//       console.log(items);
// });

// languages.forEach( (items) => {
//       console.log(items);
// });

// function print(items) {
//       console.log(items);
// }

// languages.forEach(print)



// For-Each also have access to other things i.e index, whole array

// languages.forEach( (items, idx, arr) => {
//       console.log(items, idx, arr);
// } );


// For-each doesn't return anything, even if we explictly define in the callback

let lang = languages.forEach( (items) => {
      return items === "Urdu";
});

// console.log(lang);



const mobileData = [
      {
            name : "Motrola",
            price: 15000
      },
      {
            name : "Google Pixel",
            price: 49000
      },
      {
            name : "I-phone",
            price: 65000
      },
];

mobileData.forEach( (items) => {
      // console.log(items.name);
      // console.log(items.price);
});