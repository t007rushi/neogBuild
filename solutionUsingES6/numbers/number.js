
var req = require('readline-sync')
// console.log(Number(req.question("Enter number")) + Number(req.question("Enter number")))
// console.log(req.question("Enter number") - req.question("Enter number"))


//SI 
// let p =100,r =6,t=2
// console.log(`SI is ${p*r*t/100} `)

// let cp = req.question("enter cost")
// let sp = req.question("enter sell")
// console.log(cp-sp<0? `LOSS by ${cp-sp}` :  `PROFIT by ${cp-sp}`)

// let n = parseInt(req.question("enter N"))
// console.log(n*((n+1)/2))

// let arr = [],num=1
// for(let i=0; i<n; i++){
// arr.push(num)
// num+=2
// }
// console.log(arr.reverse())

// let addSum = 1234
// console.log(String(addSum).split('').reduce((a,b) => parseInt(a)+parseInt(b) ))
// console.log((addSum.toString()).split('')) //alternate

var number = req.question("Enter no")
function dec2bin(dec){
    return (dec >>> 0).toString(2);
}
// console.log(dec2bin(number))
// console.log(typeof number >>> 0)
// console.log(typeof number)

//116
// Octal  Number 116 => 78 in decimal
function oct2dec(dec){
    return (dec >>> 0).toString(8);
}

// console.log((parseInt(number,8)))

// console.log(oct2dec(number))


// console.log(number.toString().split('').reverse().join(''));


//Rotation by r
r = parseInt(req.question("enter rotation"))
str =""
console.log(typeof number,typeof r)
for(i=number.length-1;i>number.length-r-1;i--){
str += number[i]
}
str = str.split('').reverse().join('')
for(j=0;j<number.length-r;j++)
{
    str+=number[j]
}
console.log(str)

let [temp1,temp2] = [number.slice(0,r-1),number.slice(r-1,number.length)]
console.log(temp2+temp1)
console.log([...temp2,...temp1].join(''))