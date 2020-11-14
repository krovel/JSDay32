let diceMap=new Map();

upperloop:
while(true){
    if(diceMap.size>0){
        for(let [key,value] of diceMap.entries()){
            if(value==10)
                break upperloop;
        }
    }
    let diceValue=Math.floor(Math.random()*6+1);
    if(diceMap.has(diceValue)){
        diceMap.set(diceValue,diceMap.get(diceValue)+1);
    }
    else{
        diceMap.set(diceValue,1);
    }
}

let max=0;
let min=11;
let diceValueMaxAppeared=0;
let diceValueMinAppeared=0;

for(let [key,value] of diceMap){
    if(value>max){
        max=value;
        diceValueMaxAppeared=key
    }
    if(value<min){
        min=value;
        diceValueMinAppeared=key;
    }
}
console.log(diceMap);
console.log("Number that appeared maximum times is: "+diceValueMaxAppeared);
console.log("Number that appeared minimum times is: "+diceValueMinAppeared);