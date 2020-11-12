const prompt = require('prompt-sync')();
var a = prompt('Enter variable a- ');
var b = prompt('Enter variable b- ');
var c = prompt('Enter variable c- ');
var op1 = a+b*c;
var op2 = c+a/b;
var op3 = a%b+c;
var op4 = a*b+c;
var max = Math.max(op1,Math.max(op2,Math.max(op3,op4)));
var min = Math.min(op1,Math.min(op2,Math.min(op3,op4)));
if(max == op1)
    console.log("a+b*c is max");
else if(max == op2)
    console.log("c+a/b is max");
else if(max == op3)
    console.log("a%b+c is max");
else
    console.log("a*b+c is max");

if(min == op1)
    console.log("a+b*c is min");
else if(min == op2)
    console.log("c+a/b is min");
else if(min == op3)
    console.log("a%b+c is min");
else
    console.log("a*b+c is min");