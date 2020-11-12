const prompt=require('prompt-sync')();
let number=parseInt(prompt("Enter day- "));

switch(number) {
        case 0 :
        console.log("SUNDAY");
        break;
    case 1 :
        console.log("MONDAY");
        break;
    case 2 :
        console.log("TUESDAY");
        break;
    case 3 :
        console.log("WEDNESSDAY");
        break;
    case 4 :
        console.log("THURSDAY");
        break;
    case 5 :
        console.log("FRIDAY");
        break;
    case 6 :
        console.log("SATUTRDAY");
        break;
    default :
    console.log("INVALID NUMBER");
}