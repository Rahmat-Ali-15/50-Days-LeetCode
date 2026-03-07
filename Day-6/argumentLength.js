// # 2703. Return Length of Arguments Passed

// Write a function argumentsLength that returns the count of arguments passed to it.

const fn = (...args) => {
    let ab = [...args]
    return ab.length
}

let result = fn({}, null, "3")
console.log("🚀 ~ result:", result);