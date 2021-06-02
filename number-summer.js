const prompt = require('prompt-sync')();

let input = prompt('Enter some numbers (type "done" when complete)');

let sum = 0;

while(input !== "done"){
    sum = sum + Number(input);
    input = prompt('Enter number to add ');
}

console.log(sum);