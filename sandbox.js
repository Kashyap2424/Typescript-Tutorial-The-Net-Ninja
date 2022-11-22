// explicit types #this how we can defind explicit variables
var character;
var age;
var isLoggedIn;
// age = 'kashyap'
age = 30;
// isLoggedIn = 25;
isLoggedIn = true;
// arrays
var ninjas = [];
ninjas.push("kashyap");
// union types
var mixed = [];
mixed.push("hello");
mixed.push(20);
mixed.push(false);
console.log(mixed);
var userId;
userId = "123";
userId = 123;
// userId = false # we can't assign a boolean value to userId.
// objects
var ninjaObj;
ninjaObj = { name: "kashyap", age: 20 };
var ninjaObjTwo;
ninjaObjTwo = { name: "kashyap", age: 20, beltColour: "black" };
