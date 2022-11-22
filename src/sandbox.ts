let greet = () => {
  console.log("Hello world!");
};

// greet = 'hello'; #we can't provide greet funcation to other value.

let greetToUser: Function;

greetToUser = () => {
  console.log("Hello, again");
};

const add = (a: number, b: number, c?: number | string): void => {
  console.log(a + b);
  console.log(c);
};

add(5, 10);

const minus = (a: number, b: number): number => {
  return a - b;
};

let result = minus(7, 10);
// result = 'Somthing else' # we can't change the type.
console.log(result);
