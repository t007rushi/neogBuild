/* let add = (arr) =>{ 
    sum = 0
    for(let i=0;i<arr.length;i++){
            sum+= arr[i];
    }
    console.log(sum);
}

add([10,4,5,2,5,6,9])

let avg = (arr) =>{ 
    sum = 0
    for(let i=0;i<arr.length;i++){
            sum+= arr[i];
    }
    console.log(sum/arr.length);
}

avg([10,4,5,2,5,6,9]) 

let min = (arr) =>{
    let min =arr[0]
    for(let i=1; i<arr.length; i++){
        if(min>arr[i]){
            min = arr[i]
        }
    }
    console.log(min)
}

min([10,4,5,2,5,6,9]) 

let max = (arr) =>{
    let max =0
    for(let i=0; i<arr.length; i++){
        if(max<arr[i]){
            max = arr[i]
        }
    }
    console.log(max)
}

max([10,4,5,2,5,6,9]) */

arr1 = [3,5,2,9,4] 
arr2 = [6,2,8,1,3]

var addGOne = (a1,a2) =>{
    sum = 0
    for(let i=0,j=a2.length-1; i<a1.length && j>=0; i++,j--){
        if(a1[i] > a2[j]){
            sum += a1[i]
        }else{
            sum += a2[j]
        }
    }
    console.log(sum)
}
addGOne(arr1, arr2)