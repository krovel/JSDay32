let digit = Math.floor(Math.random() * 10);
console.log(digit);

let num = (Math.floor(Math.random() * 10) % 6) + 1;
console.log("Number On Dice: " + num);

let num1 = (Math.floor(Math.random() * 10) % 6) + 1;
let num2 = (Math.floor(Math.random() * 10) % 6) + 1;
console.log("Sum: " + (num1 + num2));

const args = process.argv.slice(2);
let sum = 0;
for(let i = 0; i < 5; i++){
    sum += parseInt(args[i]);
}
console.log("sum- " + sum + " average- " + sum / 5);

const ftin = 12;
console.log("42 inches = "+ 42/ftin+" ft");

const ftmt = 0.3048;
console.log("Area: "+ (60*40)*ftmt*ftmt);

const Acresqft = 43560;
console.log("Area of 25 plots in acre: "+ (60*40)/Acresqft);