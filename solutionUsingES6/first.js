
let sum = (num1=5, num2=13, num3=7, num4=10,num5=10) => {return (num1 + num2 + num3 + num4 + num5)}

console.log(sum(2,3,4))

let oddEven = (num) => num%2 !== 0 ? "odd" : "even" 

console.log(oddEven(5))

let max = (num1,num2,num3) => {return num1>num2 ? num1>num3?num1:num3:num2>num3?num2:num3}

console.log(max(329,251,1000))

// What if there will be more than three

// HOF

let array = [2,3,4,5,3,2,1,4,9,0]

let res = array.reduce((a,b) =>{return a>b?a:b})

console.log(array)

