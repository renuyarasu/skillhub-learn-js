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
    var name = name;
    var account_no = account_no;
    var account_type = account_type;


    // Getter
    this.getName = () => {
      return name;
    }
    this.getAccountNo = () => {
      return account_no;
    }
    this.getAccountType = () => {
      return account_type;
    }

    // Setter
    this.setName = (newName) => {
      name = newName;
    }
    this.setAccountNumber = () => {
      account_no = Math.floor(Math.random() * 9000000000);
    }
    this.setAccountType = (accountType) => {
      account_type = accountType;
    }
  }


}
// 02. Creating/Installing objects by using calss
let veda = new Bank('VedaGna', null, 'Saving');
let hindu = new Bank('Hindu', null, 'Current');

// 03. Getting/Setting the properties and actions with created object.
console.log(veda.getName());
veda.setAccountNumber();
console.log(veda.getAccountNo());

console.log(hindu.getName());
hindu.setAccountNumber();
console.log(hindu.getAccountNo());
hindu.account_no = 1254;
console.log(hindu.getAccountNo());
