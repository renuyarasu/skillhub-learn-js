// Skillhub - OOPs
console.clear();
/*
• OOPs Intro
• Objects
• Classes
• Encapsulation
• Abstraction
• Reusability/inheritance
• Polymorphism
• Association
• Aggregation
• Composition
*/

// OOP = OOP (Object-Oriented Programming) is an approach in programming in which data is encapsulated within objects and the object itself is operated on, rather than its component parts.
// JavaScript is heavily object-oriented. It follows a prototype-based model (as opposed to class-based).

// Objects - Object, property, and method
/* 
    01. Object Literal
    02. Object.create()
    03. Functions are Objects in JavaScript 
    04. Using Classes
*/

/*  Encapsulation/ Data Hiding
    Encapsulation is the packing of data and functions into one component (for example, a class) and then controlling access to that component to make a "blackbox" out of the object.
 */

// 01. Creating Encapsulation class
class Bank {
  constructor(name, account_no, account_type) {
    this.name = name;
    this.account_no = account_no;
    this.account_type = account_type;
  }

  // Getter
  getName() {
    return this.name;
  }
  getAccountNo() {
    return this.account_no;
  }
  getAccountType() {
    return this.account_type;
  }

  // Setter
  setName(newName) {
    this.name = newName;
  }
  setAccountNumber() {
    this.account_no = Math.floor(Math.random() * 9000000000);
  }
  setAccountType(accountType) {
    this.account_type = accountType;
  }

}
// 02. Creating/Installing objects by using calss
let veda = new Bank('VedaGna', null, 'Saving');
let hindu = new Bank('Hindu', null, 'Current');

// 03. Getting/Setting the properties and actions with created object.

/* console.log(veda.getName());
console.log(veda.getAccountNo());

console.log(hindu.getName());
console.log(hindu.getAccountNo()); */

console.log(hindu.name);
veda.setAccountNumber(000)
console.log(veda.getAccountNo());