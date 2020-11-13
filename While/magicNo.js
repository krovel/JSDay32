console.log("Think of a number !");
const prompt = require("prompt-sync")();
let isMagicNumber = false;
let userCheck = "";
let low = 0;
let high = 100;
let mid = (low + high) / 2;
while(!isMagicNumber){
    userCheck = prompt("Is " + mid + " is Less than your number (y/n) : ");
    if(userCheck == "y"){
        low = mid;
    } else {
        high = mid;
    }
    if( userCheck != "y"){
        userCheck = prompt("Is " + mid + " is Greater than your number (y/n) : ");
        if( userCheck == "y"){
            high = mid;
        } else {
            low = mid;
        }
    }
    mid = Math.floor((low + high) / 2);
    if(high == low) isMagicNumber = true;
}
console.log("Your Number is : " + mid);