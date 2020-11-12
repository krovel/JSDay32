const IS_HEAD = 0;
const IS_TAIL = 1;

let toss = Math.floor(Math.random() * 10) % 2;
if(toss == IS_HEAD){
    console.log("Heads");
}
if(toss == IS_TAIL){
    console.log("Tails");
}