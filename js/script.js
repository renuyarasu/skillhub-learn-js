// JavaScript: Spread Operators
//Spread Operators in Array
let num1 = [1, 2, 3, 4, 5];
let num2 = [...num1, 6, 7, 8, 9];
console.log(num2);

//Spread Operators in Objects
let person = {
  name: "VedaGna",
  surname: "Yarasu",
};
let withAge = {
  ...person,
  age: 10,
};

console.log(withAge);
