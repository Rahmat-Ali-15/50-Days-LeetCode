
//# 2665. Counter II
// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.


const createCounter = () => {
    let init = 0;
    return {
        increment : function (){
            return ++init
        },
        decrement : function (){
            return --init
        },
        reset : function (){
            return 0
        }
    }
}

let ans = createCounter()
console.log("🚀 ~ ans:", ans.increment());
console.log("🚀 ~ ans:", ans.increment());
console.log("🚀 ~ ans:", ans.decrement());
console.log("🚀 ~ ans:", ans.reset());
