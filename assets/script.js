// Skillhub - Learn JavaScript/ES5
console.clear();

// Array features: map()

// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.



let myArray = [1, 2, 3, 4, 5];

let binary = (x) => x.toString(2);
let result = myArray.map(binary)

console.log(result);['1', '10', '11', '100', '101']
