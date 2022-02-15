// Skillhub - Learn JavaScript/ES5
console.clear();

// Array features: map()

// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.



let myArray = [1, 2, 3, 4, 5];


let result = myArray.map(function double(x) {
    return x * 2;
})

console.log(result); // [ 2, 4, 6, 8, 10 ]
