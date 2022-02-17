// Skillhub - Learn JavaScript/ES5
console.clear();

// Array features: Array.prototype.every()

// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

let myArray = [1, 2, 3, 4, 5];

let result = myArray.every(function (x) {
    return x > 0;
})
console.log(result); // true
