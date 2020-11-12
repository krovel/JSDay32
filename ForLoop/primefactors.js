const prompt = require('prompt-sync')();
let num = prompt('Enter the number ');
function isPrime(number){
    let count =0;
    for(let i = 1; i <= number; i++){
        if(number % i == 0) count++;
    }
    if(count == 2){
        return true;
    } else {
        return false;
    }
}

let number = num;
if(number == 1) {
    console .log("The number " + number + " has no Prime Factors.");
    return;
}
let primeFactors = new Array();
for(let i = 2; i <= number; i++){
    while(number % i == 0){
        if(isPrime(i)){
            primeFactors.push(i);
            number /= i;
        }
    }
}
console.log("Prime Factors of " + num + " is : " + primeFactors.join(" X "));