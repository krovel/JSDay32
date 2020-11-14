const INDIVIDUALS = 50;
let count = 0;

let monthArray = ["January", "February", "March", "April", "May", "June", "July", 
                       "August", "September", "October", "November", "December"];

let birthMap = new Map();
while(count < INDIVIDUALS) {
    count++;
    let name = "Person " + count;
    let month = Math.floor(Math.random() * 100) % 12;
    birthMap.set(name,monthArray[month]);
}
console.log(birthMap);

monthArray.forEach(birthMonth => {
    console.log("\nPeople born in "+birthMonth+":");
    for(let [person, month] of birthMap){
        if(month == birthMonth) console.log(person);
    }
});