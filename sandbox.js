var age; // here type of age is any
age = 20; // here we can't change the type of declered variable. just we are assige a value with any type.
console.log(age);
age = "hello"; // here we can't change the type of declered variable. just we are assige a value with any type.
console.log(age);
age = { name: "kashyap" }; // here we can't change the type of declered variable. just we are assige a value with any type.
console.log(age);
var mixed = [];
mixed.push(5);
mixed.push("kashyap");
mixed.push(false);
console.log(mixed);
var ninja;
ninja = { name: "kashyap", age: 23 };
console.log(ninja);
ninja = { name: 23, age: "kashyap" };
console.log(ninja);
