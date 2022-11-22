let character = "kashyap";
let age = 20;
let isBlackBelt = false;

// character = 20; #we can't change the type of decelerade variable in type script.
character = "kashyap-007"; //but varaiable accept same type of value.

// age = "Maitu"; #we can't change the type of decelerade variable in type script.
age = 19; //but varaiable accept same type of value.

// isBlackBelt = 'yes'; #we can't change the type of decelerade variable in type script.
isBlackBelt = true; //but varaiable accept same type of value.

const circ = (diameter: number) => {
  return diameter * Math.PI;
};

console.log(circ(21));
