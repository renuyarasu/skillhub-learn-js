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

let stocks = {
    fruits: ['Strawberry', 'Apple', 'Watermelon', 'Orange', 'Pear', 'Cherry', 'Nectarine', 'Grape'],
    liquid: ['Water', 'Ice'],
    holder: ['Cone', 'Cup', 'Stick'],
    toppings: ['Chocolate', 'Peanuts']
}


let order = (fruit_name, call_prodction) => {
    setTimeout(() => {
        console.log(`${stocks.fruits[fruit_name]} was selected!`);
        call_prodction();
    }, 2000)

};

let producion = () => {
    setTimeout(() => {
        console.log('Producion has started!');
        setTimeout(() => {
            console.log('The fruit has been chopped!');
            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
                setTimeout(() => {
                    console.log('The machine was started!');
                    setTimeout(() => {
                        console.log(`Ice cream was placed on ${stocks.holder[0]}`);
                        setTimeout(() => {
                            console.log(`${stocks.toppings[0]} was added ad toppings!`);
                            setTimeout(() => {
                                console.log('Serve ICE-CREAM ');
                            }, 2000);
                        }, 3000);
                    }, 2000);
                }, 1000);
            }, 1000)
        }, 2000)
    }, 0)
};

order(0, producion)
