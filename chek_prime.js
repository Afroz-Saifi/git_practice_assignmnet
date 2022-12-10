let num = 7;
let flag = true
for(let i=2; i<=Math.sqrt(num); i++){
    if(num%i == 0){
        flag = false
        break;
    }
}

console.log(flag);