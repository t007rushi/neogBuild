
// var arrayLength = (arr) => console.log(arr.length)
// arrayLength([1,5,3,7,8])

//doubt how to trim efficiently
// var indexOf = (arr,i) => { cnt =0;
//     for (var j = 0; j < arr.length; j++){
//      if(arr[j] == i){return cnt} else {cnt++}
//     } }
// console.log(indexOf([1,6,3,5,8,9], 3))

// var replace = (arr,f,s) => {
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] == f){
//             arr[i] = s;
//         }
//     }
// }
// let array = [1,5,3,5,6,8]
// replace(array, 5, 10)
// console.log(array)

var replace  = (arr,item,repl) => {
    let res = arr.map(ele => {return ele == item?repl:ele})
    return res;
}
console.log(replace([1,5,3,5,6,8], 5, 10))

var mergeArray = (a1,b1) => console.log([...a1,...b1])
mergeArray([1,3,5], [2,4,6])


let charAt = (str,i) => {console.log( str.split("")[i])}
charAt("neoGcamp", 4)

// .getFullYear()
// var minDate = (d1,d2) => {
//     let date1 = new Date(d2).getFullYear();
//     // date1.setDate(d1)
//     console.log(date1)
// }
const minDate = (d1, d2) => {
    // return new Date(d1).getTime() > new Date(d2).getTime() ? d2 : d1;
    let date1 = new Date(d1);
    let date2 = new Date(d2);
    if(date1.getFullYear() == date2.getFullYear()){
        if(date1.getMonth == date2.getMonth()){
            if(date1.getDate() == date2.getDate()){
                return "same date"
            }else return date1.getDate() > date2.getDate()?date2:date1
        }else return date1.getMonth() < date2.getMonth()?date1:date2
    } else{
     return   date1.getFullYear() > date2.getFullYear()?date2.getDay() :date1.getDay();
    }
  }; 
console.log(minDate('05/02/2021', '01/24/2022'))