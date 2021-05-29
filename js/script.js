// JavaScript: Spread Operator

//Ex:1
[a,b, ...rest] = [1,2,3,4,5,6];
console.log(a)
console.log(b)
console.log(rest)
;
// Ex:2
const sum = (a,b,c) => (a+b+c);
const numbers = [1,2,3];
result = sum(...numbers);
console.log(result);