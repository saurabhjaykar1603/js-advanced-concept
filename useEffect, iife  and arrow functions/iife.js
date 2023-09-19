// An IIFE (Immediately Invoked Function Expression) in JavaScript is a self-contained code block that runs immediately after it's defined. It's often used for encapsulation and preventing global variable pollution. Here's a concise example:

const age = 18;
console.log(age);  // seprate scope

(function () {
  console.log(age); // private scope 
})();
