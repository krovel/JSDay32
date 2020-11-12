const prompt = require('prompt-sync')();
let year = prompt("Enter the Year : ");

function checkLeapYear(year){
    if(year % 400 == 0) return true;
    if(year % 100 == 0) return false;
    if(year % 4 == 0) return true;
    return false;
}

if (checkLeapYear(year)) {
    console.log("Year is a Leap Year.");
} else {
    console.log("Year is not a Leap Year.");
}