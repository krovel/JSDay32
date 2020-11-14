const prompt = require("prompt-sync")();
const FAHRENHEIT_TO_CELCIUS = 1;
const CELCIUS_TO_FAHRENHEIT = 2;

function toFahrenheit(degreeCelcius){
    return (degreeCelcius * 9 / 5) + 32;
}
function toCelcius(degreeFahrenheit){
    return (degreeFahrenheit - 32) * 5 / 9;
}
console.log("1. degF to degC\n2. degC to degF");
let choiceOfConversion = prompt("Enter the Conversion Type : ");
choiceOfConversion = parseInt(choiceOfConversion);
switch(choiceOfConversion){
    case FAHRENHEIT_TO_CELCIUS :
        let fahrenheit = prompt("Enter degree fahrenheit : ");
        if( fahrenheit < 32 || fahrenheit > 212){
            console.log("Invalid Degree Fahrenheit");
            return;
        }
        console.log(fahrenheit + " degF = " + toCelcius(fahrenheit).toFixed(2) + " degC");
        break;
    case CELCIUS_TO_FAHRENHEIT :
        let celcius = prompt("Enter degree celcius : ");
        if( celcius < 0 || celcius > 100){
            console.log("Invalid Degree Celcius");
            return;
        }
        console.log(celcius + " degC = " + toFahrenheit(celcius).toFixed(2) + " degF");
        break;
    default :
        console.log("Invalid Conversion Selection");    
}