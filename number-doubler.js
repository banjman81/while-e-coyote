const prompt = require('prompt-sync')();

let input = Number(prompt('Enter a number: '));

let sum = input;

while(sum< 100){
    sum = sum + sum;
    console.log(sum);
}
