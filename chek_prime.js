let num = 7;

let flag = true;
for(let i=2; i<=Math.sqrt(num); i++){
    if(num%i == 0){
        flag = false;
        break;
    }
}

if(flag == true){
    console.log("Yes")
}else{
    console.log("No")
}