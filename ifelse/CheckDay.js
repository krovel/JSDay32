const prompt=require('prompt-sync')({signin:true});
let date = prompt("Enter the Date : ");
let month = prompt("Enter the Month : ");

let startDate = new Date("March 20, 2020");
let inputDate = new Date(month + " " + date + ", 2020");
let endDate = new Date("June 20, 2020");
if (inputDate > startDate && inputDate < endDate) {
    console.log("True");
} else {
    console.log("False");
}