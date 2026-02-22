// # 2648. Generate Fibonacci Sequence

/* 
Write a generator function that returns a generator object which yields the fibonacci sequence.

The fibonacci sequence is defined by the relation Xn = Xn-1 + Xn-2.

The first few numbers of the series are 0, 1, 1, 2, 3, 5, 8, 13.
*/


const fiboGenerator = function* () {
    let a = 0;
    let b = 1;
    let next
    for(let i = 0; ; i++){
        yield a
        next = a + b
        a = b
        b = next
    }
}

let ans = fiboGenerator()
console.log("🚀 ~ ans:", ans.next().value);
console.log("🚀 ~ ans:", ans.next().value);


// # Note -> function* is a generator function

// # yield -> It is used in Generator function (Pause + return value + resume later)
//  Function thoda chalega → value dega → ruk jayega → next time wahi se start hoga


// Difference: return vs yield

// # return	                    yield
/*
Function end	            Function pause
Ek hi value	                Multiple values
Restart from start	        Continue from same place
*/

// # How yield works internally
/*
Step 1 -> Generator start hota hai

Step 2 -> yield tak run karta hai

Step 3 -> Value deta hai + pause

Step 4 -> Next .next() call → wahi se continue
*/


// # next() -> Generator ko aage chalane ka button
/* 
when .next() is called:

1. Generator start/continue hota hai
2. Next yield tak run karta hai
3. Ek object return karta hai
*/

//! What next() returns?
// next() returns an object -> { value: ..., done: ... }

// # .value -> .value is used to take value form the object because next() return an object and if we want vlaue only then we use .value