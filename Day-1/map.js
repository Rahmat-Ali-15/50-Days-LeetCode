// # 2635. Apply Transform Over Each Element in Array

/* 
Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).
*/

// # Please solve it without the built-in Array.map method.


// # Custom map method


// This will not change the original arr // # Prefered
const map = (arr, fn) => {
    let mappedArr = []

    for(let i = 0; i<arr.length; i++){
        mappedArr.push(fn(arr[i],i))
    }
    return mappedArr
}

const result = map([2,3,4,5], (x) => x+5)
console.log("🚀 ~ result:", result);



// This will change the original arr // # Not prefered
const map1 = (arr, fn) => {
    let mappedArr = []

    for(let i = 0; i<arr.length; i++){
        arr[i] = fn(arr[i],i)
        mappedArr.push(arr[i])
    }
    return mappedArr
}

const result1 = map1([2,3,4,5], (x) => x+5)
console.log("🚀 ~ result:", result1);


// # This is for reference logic
// const map = () => {
//     let arr = [1,2,3]
//     let mappedArr = []

//     for(let i = 0; i<arr.length; i++){
//         arr[i] = arr[i] + 2
//         mappedArr.push(arr[i])
//     }
//     return mappedArr
// }
// let ans = map()
// console.log("🚀 ~ ans:", ans);



// Second version without using push
function map2(arr, fn) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr[i] = fn(arr[i],i)
    }
    return newArr
}

let ans = map2([5,7,6,4], (x)=> x*2)
console.log("🚀 ~ ans:", ans);

