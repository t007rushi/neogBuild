// var encodeString = (str,jmp) => {
//     res = ""
//     str.split("").forEach(alph => res+=String.fromCharCode(str.charCodeAt(str.indexOf(alph))+jmp))
//     return res
// }

// console.log(encodeString("neogcamp", 3))

// let toSentenceCase = (sen) => {
//     let arr = sen.split(" ");
//     let res = arr.forEach(word => {return word})
//      console.log(res)
// }
// toSentenceCase('we are neoGrammers')

let sortArray = (arr) => { console.log(arr.sort((a,b) => a-b))}

sortArray([100,83,32,9,45,61])

//doubt forEach vs map
let reverseCharactersOfWord = (sen) => {
    res =  sen.split(" ").map(word => word.split("").reverse().join("") ).join(" ")
console.log(res)
};

console.log(reverseCharactersOfWord('we are neoGrammers'))