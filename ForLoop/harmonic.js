const prompt = require('prompt-sync')();
let n = prompt('Enter the value of n- ');
let nthHarmonic = 0;
for (let i = 1; i <= n; i++){
    nthHarmonic += 1/i;
}
console.log(n + "th Harmonic : " + nthHarmonic);