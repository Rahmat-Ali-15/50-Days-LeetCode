//# 2666.  Allow One Function Call

// Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

// The first time the returned function is called, it should return the same result as fn.
// Every subsequent time it is called, it should return undefined.

const Once = (fn) => {
    let callde = false
    let result;
    return function(...args){
        if(!callde){
            callde = true;
            result = fn(...args)
            return result
        }
        return undefined
    }
}

function add(a,b,c){
    return a + b + c
}

let addOnce = Once(add)

console.log(addOnce(5,4,3)) // 12

console.log(addOnce(15,14,3)) // undefined

