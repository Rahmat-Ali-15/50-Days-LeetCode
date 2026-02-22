// # 2635. Apply Transform Over Each Element in Array

/* 
Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).
*/

// # Please solve it without the built-in Array.map method.


// # Custom map method

const map = (arr, fn) => {
    let mappedArr = []

    for(let i = 0; i<arr.length; i++){
        arr[i] = fn(arr[i],i)
        mappedArr.push(arr[i])
    }
    return mappedArr
}

const result = map([2,3,4,5], (x) => x+5)
console.log("🚀 ~ result:", result);


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
