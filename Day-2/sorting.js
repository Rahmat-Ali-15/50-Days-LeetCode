// # 2724. Sort By

// Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. sortedArr must be sorted in ascending order by fn output.

// You may assume that fn will never duplicate numbers for a given array.

const sortBy = (arr,fn) => {
    
    for(let i = 0; i<arr.length; i++){
        for(let j = 0; j < arr.length-1; j++){
            if(fn(arr[j]) > fn(arr[j+1])){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr
}

console.log(sortBy([2,1,5,3,8,4], (a) => a))




// # This is cutom sorting method

const sorting = (arr,fn) => {
    
    for(let i = 0; i<arr.length; i++){
        for(let j = 0; j < arr.length-1; j++){
            if(fn(arr[j], arr[j+1]) > 0){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr
}

console.log(sorting([2,1,5,3,8,4], (a,b) => a - b))