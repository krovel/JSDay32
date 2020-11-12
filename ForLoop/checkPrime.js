const prompt=require('prompt-sync')();
let number=parseInt(prompt("Enter number- "));

for(i=2;i<number/2;i++){
    if(number%i==0){
        console.log("Not a prime number");
        return;
    }
}
console.log("Prime number ");