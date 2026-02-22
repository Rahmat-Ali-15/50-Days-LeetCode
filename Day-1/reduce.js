// # 2626. Array Reduce Transformation

/*
Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.

This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.

If the length of the array is 0, the function should return init.
*/

// # Please solve it without using the built-in Array.reduce method.

// # Custom reduce method

const reduce = (nums, fn, init) => {
    let val = init
    for(let i = 0; i<nums.length; i++){
        val = fn(val, nums[i])
    }
    return val
}

let ans = reduce([1,2,3,4],(acc,curr) => acc + curr, 0)
console.log("🚀 ~ ans:", ans);


// # This is for reference logic
// const reduce = () => {
//     let arr = [1,2,3]
//     let curr;
//     let initialVal = 0
//     let acc = initialVal

//     for (let i = 0; i<arr.length; i++){
//         curr = arr[i];
//         console.log(`acc = ${acc}, curr = ${curr}`);
//         acc = acc + curr
//         console.log(`sum = ${acc}`);
//     }
//     return acc
// }
// let ans = reduce()
// console.log("🚀 ~ ans:", ans);
