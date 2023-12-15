
// IIFE (Immediately Invoked Function Expression) - is a JavaScript function that runs as soon as it is defined


/* 
      Use cases - Avoid polluting the global namespace (DOUBT) & creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.
*/


let v = 100;

( (name) => {
      console.log(`Hello ${name}`)
})('Tahir');


// Important point - Whatever defined or wrritten before IFFE should be ending with semi-colon , otherwise the code will not run - Gives TypeError.


(function fun () {
      // named IFFE
      console.log(`Value is ${v}`);
})();