// Asynchronous JavaScript Course (Async/Await, Promises, Callbacks)
// https://www.youtube.com/watch?v=ZYb_ZU8LNxs
console.clear();

// Synchronous 
console.log("0001");
console.log("0002");
console.log("0003");
console.log("0004");
console.log("0005");

/* 0001
0002
0004
0003
0005 */



//Asynchronous


console.log("0001");
console.log("0002");

setTimeout(() => {
    console.log("0003");
}, 4000)

console.log("0004");
console.log("0005");
/* 
0001
0002
0004
0005
0003 after 4s */

