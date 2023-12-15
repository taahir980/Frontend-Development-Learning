
// Taking user input in Node.js Environment

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter something: ', (userInput) => {
    console.log(`User entered: ${userInput}`);
    rl.close();
});