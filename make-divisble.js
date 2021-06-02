const prompt = require('prompt-sync')();

const xInput = Number(prompt('Enter x: '));
const y = Number(prompt('Enter y: '));

let x = xInput;

while(x % y !== 0){
    console.log(x)
    x= x+1;
}

console.log(x, 'is divisible by', y);