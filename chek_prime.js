let num = 7;
let flag = false;
for(let i=2; i<=Math.sqrt(num); i++){
    if(num%i == 0){
        flag = true;
        break;
    }
}

console.log(flag);