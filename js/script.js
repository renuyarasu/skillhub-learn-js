// ES6: Destructuring 
console.clear();

const name = 'Veda Ganpika Yarasu';
const nameArr = name.split(' ');

/* let fname = nameArr[0];
let mname = nameArr[1];
let lname = nameArr[2]; */

let [fname, , lname] = nameArr;
console.log(fname);
// console.log(mname);
console.log(lname);