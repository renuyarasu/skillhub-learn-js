

// Asynchronous JavaScript Course (Async/Await, Promises, Callbacks)
// https://www.youtube.com/watch?v=ZYb_ZU8LNxs
console.clear();

// Callbacks
// When you nest a function inside another function as an argument, that's called a callback.

// Let Start our ICE-CREAM Cafe

/* 
Order from customer 
↓
fetch Ingredients   
↓
Start Producion
↓
Serve
*/

/* TIME (seconds)
#1: Place Order →	        2
#2: Cut the Fruit →         2
#3: Add Water an Ice  →     1
#4: Start the machaine  →   1
#5: Select container  →     2
#6: Select toppings  →      3
#7: Serve the ICE-CREAM  →  2
*/

// Promises
/* 
We need to understand 4 things first:
01. Relationship BTW Time and Work
02. Promise Chaining 
03. Error Handling
04. The .finally handler
*/

let stocks = {
    fruits: ['Strawberry', 'Apple', 'Watermelon', 'Orange', 'Pear', 'Cherry', 'Nectarine', 'Grape'],
    liquid: ['Water', 'Ice'],
    holder: ['Cone', 'Cup', 'Stick'],
    toppings: ['Chocolate', 'Peanuts']
}

let is_shop_open = true;

// Await

let topping_choice = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log('Which topping would you like?'));
        }, 3000);
    })
}
async function kitchen() {
    console.log('A');
    console.log('B');
    console.log('C');
    await topping_choice()
    console.log('D');
    console.log('E');
}
kitchen()
console.log('Vessels Cleaning');
console.log('Table Cleaning');
console.log('Taking Other Order');