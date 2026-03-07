// # 2677. Chunk Array

// Given an array arr and a chunk size size, return a chunked array.

// A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

// Please solve it without using lodash's _.chunk function.



const chunkArr = (arr, size) => {
    let chunckedArr = [];
    for(let i = 0; i < arr.length; i = i + size){
        let smallArr = [];
        for(let j = i; j < i + size && j < arr.length; j++){
            smallArr.push(arr[j])
        }
        chunckedArr.push(smallArr)
    }
    return chunckedArr
}

let result = chunkArr([1,2,3,4,5,6], 2)
console.log("🚀 ~ result:", result);



//! This is for reference

// function chunckedArr(){
//     let arr = [1,2,3,4,5,6,7,8]
//     let size = 3
//     let chuncked = []
    
//     for(let i = 0; i < arr.length; i = i+size){
//             let small = []
//             for(let j = i; j < i + size && j < arr.length; j++){
//                 small.push(arr[j])
//             }
//             chuncked.push(small)
//         }
//     return chuncked
// }

// let result = chunckedArr()
// console.log("🚀 ~ result:", result);





const fn = (...args) => {
    let a = [...args]
    console.log(a)
}
console.log(fn(a,b))