const IS_HEADS = 0;
const IS_TAILS = 1;
let tossoccur = 0;
let headwin = 0;
let tailwin = 0;
while(headwin < 11 && tailwin < 11){
    tossoccur++
    let toss = Math.floor(Math.random() * 10) % 2;
    switch(toss){
        case IS_HEADS :
            headwin++;
            break;
        case IS_TAILS :
            tailwin++;
            break;
    }
}
console.log("Times Coin Tossed : " + tossoccur);
console.log("HEAD WINS : " + headwin + ", TAIL WINS : " + tailwin);