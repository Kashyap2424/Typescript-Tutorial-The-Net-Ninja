// arrays
let names = ["kashyap", "chintan", "maitu"];

//names = 'hello' #as we early learn in this tutorial we can't change type on names variable.

names.push("kattu");

// names.push(4); #if we give to the string value to the array in initial stage then. We can't push any number value in this array.
// names[0] = 3; #and also we can't change value via position(index).

let numbers = [10, 20, 30, 40];

numbers.push(50);

let mixed = ["name", 34, "AToZ", 45]; // now this array is contain mixed value('string' and 'numbers'), here in this array we pushed 'string' and 'number' both in the same array.

mixed.push("reveu");
mixed.push(40);

// objects

let ninja = {
  name: "kashyap",
  belt: "black",
  age: 20,
};

ninja.age = 21; // #this is valid.
ninja.name = "ryu"; // #this is valid.

// ninja.age = '30' #we can't change value of key how belong to the other type.
// ninja.skills = ['fighting', 'sneaking']; # we can't add new pair of key value in the object

// ninja = 'name' #we can't change the object type.

ninja = {
  name: "kattu",
  belt: "orange",
  age: 20,
};
