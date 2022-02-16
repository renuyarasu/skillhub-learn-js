// Skillhub - Learn JavaScript/ES5
console.clear();

// Array features: Array.prototype.reduce()

// The reduce() method executes a user-supplied “reducer” callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.


let myArray = [1, 2, 3, 4, 5];

// Regular Function
/* function findSum(myArray) {
    let sum = 0;
    for (let i = 0; i < myArray.length; i++) {
        sum = sum + myArray[i];
    }
    return sum;
}
 */

let result = myArray.reduce(function (acc, cur) {
    acc = acc + cur;
    return acc;
}, 0)

console.log(result); // 15
