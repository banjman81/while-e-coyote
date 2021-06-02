const prompt = require('prompt-sync')();

const input = prompt('Enter a string: ');

let string = input;
console.log(string);

while(string.length < 10){
    string = string + input;
    console.log(string);
}