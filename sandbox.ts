// explicit types #this how we can defind explicit variables
let character: string;
let age: number;
let isLoggedIn: boolean;

// age = 'kashyap'
age = 30;

// isLoggedIn = 25;
isLoggedIn = true;

// arrays
let ninjas: string[] = [];

ninjas.push("kashyap");

// union types
let mixed: (string | number | boolean)[] = [];
mixed.push("hello");
mixed.push(20);
mixed.push(false);

console.log(mixed);

let userId: string | number;

userId = "123";
userId = 123;
// userId = false # we can't assign a boolean value to userId.

// objects
let ninjaObj: object;

ninjaObj = { name: "kashyap", age: 20 };

let ninjaObjTwo: {
  name: string;
  age: number;
  beltColour: string;
};

ninjaObjTwo = { name: "kashyap", age: 20, beltColour: "black" };
