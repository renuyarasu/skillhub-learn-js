// Skillhub - Learn JavaScript/ES5
console.clear();

// Array features: Array.prototype.reduce()

// The reduce() method executes a user-supplied “reducer” callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

const users = [

    { firstname: 'VedaGna', lastname: 'Yarasu', age: 5 },
    { firstname: 'Hindu', lastname: 'Sajja', age: 25 },
    { firstname: 'Renu', lastname: 'Yarasu', age: 35 },
    { firstname: 'Gnapika', lastname: 'Yarasu', age: 7 }
]

// Find Full Name
let result = users.map(function (x) {
    x = x.firstname + ' ' + x.lastname;
    return x
})

console.log(result); // [ 'VedaGna Yarasu', 'Hindu Sajja', 'Renu Yarasu', 'Gnapika Yarasu' ]

