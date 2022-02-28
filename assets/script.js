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

/* let order = () => {
    return new Promise((resolve, reject) => {
        if () {
            resolve()
        } else {
            reject()
        }
    })
}

order()
.then()
.then()
.then()
.catch()
.finally() */

async function order() {
    try {
        await abc;
    }
    catch (error) {
        console.log("ABC doen't exists");
    }
    finally {
        console.log('Anyway run code');
    }
}
order()
    .then(() => {
        console.log('Producion has started!')

    })