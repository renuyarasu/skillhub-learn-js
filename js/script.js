const myarr = [1, 2, 3, 4, 5];
const newarr = [];

const doubleValues = item => item * 10;

for (let i = 0; i < myarr.length; i++) {
    newarr.push(doubleValues(myarr[i]));
}
console.log(newarr);