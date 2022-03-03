// Skillhub - ES12-ES2020
console.clear();
/* 
• String.prototype.replaceAll()
• Numeric separators
• Logical Assignment Operators (&&=, ||=)
*/


// Logical Assignment Operators (&&=, ||=)
// Logical AND assignment (||=)
// The logical OR assignment (x ||= y) operator only assigns if x is falsy.

const a = { duration: 50, title: '' };

a.duration ||= 10;
console.log(a.duration);
// expected output: 50

a.title ||= 'title is empty.';
console.log(a.title);
// expected output: "title is empty"
