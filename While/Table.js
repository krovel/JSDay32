const prompt = require('prompt-sync')();
let n = prompt('Enter the value of n- ');
let table = "";
let index = 1;
while(index <= n && Math.pow(2, index) <= 256){
    table += Math.pow(2, index) + " ";
    index++;
}
console.log(table);