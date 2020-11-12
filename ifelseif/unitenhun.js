const prompt=require('prompt-sync')();
let number=prompt("Enter number : ");

if(number==1)
    console.log("unit");
else if(number==10)
    console.log("ten");
else if(number==100)
    console.log("hundred");
else if(number==1000)
    console.log("thousand");
else
    console.log("INVALID NUMBER")