const prompt=require('prompt-sync')();
const floor = parseInt(prompt('Enter start value of range: '));
const ceiling = parseInt(prompt('Enter end value of range: '));

console.log(`The prime numbers between ${floor} and ${ceiling} are:`);

for (let i = floor; i <= ceiling; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}