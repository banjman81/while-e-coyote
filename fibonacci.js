const prompt = require('prompt-sync')();

let input = prompt('Enter a value for "n": ');

let steps = 1;
let a = 1;
let b = 0;
console.log(b);

let sum = 0;

while(steps< input ){
    sum = a + b;
    a = b;
    b = sum;
    console.log(sum)
    steps= steps +1;
}