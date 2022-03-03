// Skillhub - ES12-ES2020
console.clear();
/* 
• String.prototype.replaceAll()
• Numeric separators
• Logical Assignment Operators (&&=, ||=)
*/


// Logical Assignment Operators (&&=, ||=)
// Logical AND assignment (&&=)
// The logical AND assignment (x &&= y) operator only assigns if x is truthy.

let a = 1;
let b = 0;

a &&= 2;
console.log(a);
// expected output: 2

b &&= 2;
console.log(b);
// expected output: 0