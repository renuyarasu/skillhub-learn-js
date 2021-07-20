console.clear();
class test {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    add() {
        return this.num1 + this.num2;
    }
}
let sum = new test(10, 20);
console.log(sum.add());