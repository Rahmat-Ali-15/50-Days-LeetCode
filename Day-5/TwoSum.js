// # 1. Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

const twoSum = (nums, target) => {
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i,j]
            }
        }
    }
}

let ans = twoSum([7,5,3,2,4,6], 12)
console.log("🚀 ~ ans:", ans);



//# Two Sum using Two Pointer Technique

const twoSum1 = (nums, target) => {
    let result = {};
    
    for (let i = 0; i < nums.length; i++){
        let element = target - nums[i]
        if(result[element] !== undefined){
            return [result[element],i]
        }
        result[nums[i]] = i
    }
}

let ans1 = twoSum1([2,7,11,15], 9)
console.log("🚀 ~ ans:", ans1);

