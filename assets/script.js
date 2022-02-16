// Skillhub - Learn JavaScript/ES5
console.clear();

// Array features: Array.prototype.reduce()

// The reduce() method executes a user-supplied “reducer” callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

const users = [

    { firstname: 'VedaGna', lastname: 'Yarasu', age: 5 },
    { firstname: 'Hindu', lastname: 'Sajja', age: 25 },
    { firstname: 'Renu', lastname: 'Yarasu', age: 35 },
    { firstname: 'Gnapika', lastname: 'Yarasu', age: 5 }
]

// Find Full Name
// let result = users.filter(x => x.age < 30).map((x) => x.firstname);
// Use reduce - 01
let result = users.reduce((acc, cur) => {
    if (cur.age < 30) {
        acc = [...acc, cur.firstname];
    }
    return acc;
}, [])


console.log(result); 