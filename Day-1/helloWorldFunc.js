// # Create Hello World Function

// Write a function createHelloWorld. It should return a new funvtion that always returns "Hello World".

const helloWorldFunc = () => {
    return () => "Hello World"
}
let ans = helloWorldFunc()
console.log("🚀 ~ ans:", ans());




// # Counter

// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n+1, n+2, etc).

const fn = (n) => {
    return function counter() {
        return n++
    }
}
let ans2 = fn(5)
console.log("🚀 ~ ans2:", ans2());
