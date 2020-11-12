function getRandom3DigitValues(){
    return Math.floor(Math.random() * 1000);
}

var randomValue;
let maximumValue = 0;
let minimumValue = 999;
for(let i = 0; i < 5; i++){
    randomValue = getRandom3DigitValues();
    if(randomValue > maximumValue) maximumValue = randomValue;
    if(randomValue < minimumValue) minimumValue = randomValue;
}
console.log("Maximum Value : " + maximumValue);
console.log("Minimum Value : " + minimumValue);