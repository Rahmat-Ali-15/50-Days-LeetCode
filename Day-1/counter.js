// # Counter

// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n+1, n+2, etc).

const fn = (n) => {
    return function counter() {
        return n++
    }
}
let ans = fn(5)
console.log("🚀 ~ ans2:", ans());
console.log("🚀 ~ ans2:", ans());
console.log("🚀 ~ ans2:", ans());
