//Intermediate

//1st

// for(let i=0;i<5;i++){
//     str =  ""
//     for(j=0;j<i;j++){
//         str += " \\* "
//     }
//     console.log( str + "\\ " )
// }

//2nd

var temp = require("readline-sync")

let num = temp.question("Enter a number")

// Using for 

// for(i = 1;i<13;i++){
//     console.log(i*num)
// }

//Using While

// let i =0
// while(i<13){
//     console.log(i*num)
//     i++;
// }

function fibo(n){
let ft = 0
let sd = 1
var array = [ft,sd]
while(n>0){
    temp = ft+sd
    
    array.push(sd)
    ft = sd
    sd = temp
    n--;
}
return array;
}

// console.log(fibo(temp.question("enter no")))

//Can we write recursive way ?

// function recFibo(n){
//     if(n==0 || n==1) {return 0}
//     else{
//             return recFibo(n-1) + 
//     } 
// }

let fact = (num) => {return (num == 0 || num ==1)? 1:num * fact(num-1)} 
console.log(fact(5))

let isPrime = (num) => {
for(i=2;i<num;i++){
    if(num%i == 0) return "not prime"
}
return "is prime"
}
console.log(isPrime(21))

console.log(num == "sunday" || num == "saturday" ? "weekend": "weekday")