const prompt=require('prompt-sync')();
let numArray=new Array();
numArray.push(parseInt(prompt("Enter first number- ")));
numArray.push(parseInt(prompt("Enter second number- ")));
numArray.push(parseInt(0-numArray[0]-numArray[1]));

console.log("Numbers are: "+numArray);
let sum=0;
numArray.forEach(num=>sum=sum+num);
console.log("Sum of the numbers is: "+sum);