let amount=100;
let goal=200;
let wins=0;
let bets=0;
while(amount!=0 && amount<goal){
    let gamble=Math.floor(Math.random()*2);
    if(gamble==1){
        amount++;
        wins++;
    }
    else amount--;
    bets++;
}
if(amount==goal)
    console.log("Won !");
else 
    console.log("Lose !");
console.log("Number of times bet won "+wins);
console.log("Number of times bet made "+bets);