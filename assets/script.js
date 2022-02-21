// Asynchronous JavaScript Course (Async/Await, Promises, Callbacks)
// https://www.youtube.com/watch?v=ZYb_ZU8LNxs
console.clear();

// Callbacks
// When you nest a function inside another function as an argument, that's called a callback.


function one(call_two) {
    console.log('Step 01 completed, and please call Step 02!');
    call_two()
}
function two() {
    console.log('Step 02');
}

one(two);
