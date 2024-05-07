// shallow copy
let originalArray = [1, 2, 3, 4];
let copiedArray = originalArray;
copiedArray[0] = 5;
console.log(originalArray);

// deep copy
let deeporiginal = [1, 2, 3, 4];
let deepCopy = [...deeporiginal];
deepCopy[0] = 8;
console.log(deeporiginal);

// high-order function example one
function doSomething(callBack) {
  console.log("i am doing something");
  callBack();
}

function sayHello() {
  console.log("hello");
}

console.log(doSomething(sayHello));

// high-order function example two
function createMultiplier(factor) {
  return function (number) {
    number * factor;
  };
}
