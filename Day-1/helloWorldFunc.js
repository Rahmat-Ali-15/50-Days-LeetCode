// # Create Hello World Function

// Write a function createHelloWorld. It should return a new funvtion that always returns "Hello World".

const helloWorldFunc = () => {
    return () => "Hello World"
}
let ans = helloWorldFunc()
console.log("🚀 ~ ans:", ans());