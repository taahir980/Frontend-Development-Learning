
// First Approach

// const promiseOne = new Promise(function(resolve, reject) {
//       // Do an async taks
//       setTimeout( function(){
//             console.log("Async task is completed");
//             resolve();
//       }, 2000);
// });

// promiseOne.then(function(){
//       console.log("Promise is fulfilled");
// });


// Second Approach

// new Promise(function(resolve, reject){
//       setTimeout(function(){
//             console.log("Async task-2 is completed");
//             resolve();
//       }, 2000)
// }).then(function(){
//       console.log("Promise-2 is also fulfilled");
// })


// Third Promise

// const promiseThree = new Promise(function(resolve, reject){

//       setTimeout(function(){
//             // It can also return some value to then(), let's say, the promise extracted something from database, wants to return that value, we can return through resolve(arguments). the anrgument value can be anything.
//             console.log("Ansync task-3 is completed");
//             resolve({name: "Tahir", email:"tahirtrk42@gmail.com"});
//       }, 1000)
// });

// promiseThree.then(function(obj){
//       console.log(obj);
// });


// Fourth Promise

const promiseFour = new Promise(function(resolve, reject){
      setTimeout(function(){

            let error = false;

            if(!error) {
                  resolve([12, 34, 55, 66]);
            } else {
                  reject("ERROR");
            }

      }, 2000);
});

// This things can't be stored in any variable
promiseFour
.then(function(arr){
      console.log(arr);
      return arr[0];    // This return statement returns the value to another then
})
.then(function(val){
      console.log(val);
})
.catch(function(str){
      console.log(str);
})
.finally(function(){
      console.log("finally whatever the promise have to do is completed");
});