

// let power = (a,b) => {if(b===0) {return 1 } else { return a*power(a,b-1)}}

// console.log(power(2,3))
// // if(b===0) {return 1 } else {a*power(a,b-1)}

// hexa  = (a) => {return Math.round((3*1.732*a*a)/2,2)}

// console.log(hexa(10))


// var noOfWords = (line) => {return line.split(" ").length}
// console.log(noOfWords("We are ne oG ram mers"))


// let findMin = (...arr) => arr.reduce((a,b) => {return a<b?a:b})
// console.log(findMin(3,5,9,1))

// let findMax = (...arr) => arr.reduce((a,b) => {return a>b?a:b})
// console.log(findMax(3,5,9,1))

let typeOfTriangle = (a,b,c) => { 
    return  a+b+c !== 180? "not triangle":a ===b && b===c ?"eqilateral" :a==b || b==c || a==c ?"isoceleos" :"scalene"
}

// let a =60,b=60,c=60
// console.log(a==b && b==c)

console.log(typeOfTriangle(90, 50, 50))