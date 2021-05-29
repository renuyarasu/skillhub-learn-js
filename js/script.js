// JavaScript: Rest Parameters
const foo = (x,y,...rest) => rest;
console.log(foo(1,2,3,4,5,6,7,8,9,0)); //[3, 4, 5, 6, 7, 8, 9, 0]