const prompt = require('prompt-sync')();
let n = prompt('Enter the value of n- ');
let table = "";
for (let i = 0; i <= n; i++){
    table += Math.pow(2, i) + " ";
}
console.log(table);