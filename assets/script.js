// Skillhub - Learn JavaScript/ES5
console.clear();

// Array features: filter()

// The filter() method creates a new array with all elements that pass the test implemented by the provided function.



let myArray = [1, 2, 3, 4, 5];

function oddValues(x) {
    return x % 2;
}

let result = myArray.filter(oddValues);
console.log(result); //[ 1, 3, 5 ]

