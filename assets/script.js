// Skillhub - Learn JavaScript/ES5
console.clear();

// Array features: Array.prototype.reduce()

// The reduce() method executes a user-supplied “reducer” callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.


let myArray = [1, 2, 3, 4, 5];

// Regular Function
/* function findMax(myArray) {
    let max = 0;
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] > max) {
            max = myArray[i]
        }
    }
    return max
}
 */

let result = myArray.reduce(function (max, cur) {
    if (cur > max) {
        max = cur;
    }
    return max;
}, 0)

console.log(result); // 15

// console.log(findMax(myArray));
