// Skillhub - Learn JavaScript/ES6
console.clear();

// The JSON.stringify() method converts a JavaScript object or value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified.

let data = {
    "userId": 1,
    "id": 1,
    "title": "quidem molestiae enim"
};

let result = JSON.stringify(data)

console.log(result); // {"userId":1,"id":1,"title":"quidem molestiae enim"}
