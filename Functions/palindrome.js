const prompt = require("prompt-sync")();
let number1 = prompt("Enter a 1st number: ");
let number2 = prompt("Enter a 2nd number: ");

function isPalindrome(value1, value2){
    let reverse = 0;
    while(value1 >= 1 ){
        reverse = parseInt(reverse * 10 + (value1 % 10));
        value1 = parseInt(value1 / 10);
    }
    if(reverse == value2){
        return true;
    }
    else return false;
}

if(isPalindrome(number1, number2)){
    console.log("The two numbers are Palindromes");
} else {
    console.log("The two numbers are not Palindromes");
}