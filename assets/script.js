

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

let is_shop_open = false;

function time(ms) {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(resolve, ms);
        } else {
            reject(console.log('Shop is Closed!'));
        }
    })
}

async function kitchen() {
    try {
        await time(2000);
        console.log(`${stocks.fruits[0]}`);

        await time(1000);
        console.log('Producion has started!');

        await time(2000);
        console.log('The fruit has been chopped!');

        await time(1000);
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

        await time(1000);
        console.log('The machine was started!');

        await time(2000);
        console.log(`Ice cream was placed on ${stocks.holder[0]}`);

        await time(3000);
        console.log(`${stocks.toppings[0]} was added ad toppings!`);

        await time(2000);
        console.log('Serve ICE-CREAM');

    }
    catch (error) {
        console.log('Customer Left!', error);
    }
    finally {
        console.log('Day ended, Shop is Closed!');
    }
}
kitchen()