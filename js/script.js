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

/*  Abstraction
    Abstraction in computer programming is a way to reduce complexity and allow efficient design and implementation in complex software systems. It hides the technical complexity of systems behind simpler APIs.
 */
// Creating Abstract Class
class Mobile {
    constructor(name, color, initialCharging) {
        this.name = name;
        this.color = color;
        this.initialCharging = initialCharging;
        var currentCharging = 0;
        var chargingDetails = (charge) => {
            currentCharging = this.initialCharging + charge;
            if (currentCharging > 100) {
                throw Error('Mobile is fully charged!');
            }
            console.log('Current Charging: ' + currentCharging);
        }
        this.plugInCharge = (charge) => {
            chargingDetails(charge);
        }
    }
}

// Creating/Installing objects by using class
let redmi = new Mobile('Redmi Note 7', 'Black', 20);
let apple = new Mobile('Apple', 'Black', 20);

// Getting/Setting the properties and actions with created object.
// redmi.plugInCharge(30);
// console.log(redmi.currentCharging);
console.log(redmi.plugInCharge(200));


// Abstraction Interview Q/A

/* 01. What exactly Abstraction means? 
► Abstraction is the method of hiding the unwanted information. 
02. What is the difference between Encapsulation and Abstraction? 
► Abstraction is the method of hiding the unwanted information. Where as encapsulation is a method to hide the data in a single entity or unit along with a method to protect information from outside. */




