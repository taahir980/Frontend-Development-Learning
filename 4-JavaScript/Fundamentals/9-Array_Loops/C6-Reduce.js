
const numsArr = [2, 4, 6, 8, 10];

let initialVal = 0;
let totalVal = numsArr.reduce( (acc, currItem) => (acc + currItem), initialVal);
console.log(totalVal);


const shoppingCart = [
      {
          itemName: "Jeans",
          price: 1199
      },
      {
          itemName: "T-shirt",
          price: 699
      },
      {
          itemName: "Shirt-full-sleeve",
          price: 1699
      },
      {
          itemName: "Hoodie",
          price: 799
      },
];


const totalPriceToPay = shoppingCart.reduce( (acc, currVal) => {
      return acc + currVal.price;
}, 0);

console.log(totalPriceToPay);