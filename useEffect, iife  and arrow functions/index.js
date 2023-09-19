// useEffect vanila js code

// internal working of useEffect

function useEffect(fn, dependencies) {
    console.log("useEffect");   // Log "useEffect" to the console
    fn();                       // Call the function 'fn'
    console.log(dependencies);  // Log the 'dependencies' array to the console
    console.log("useEffect end"); // Log "useEffect end" to the console
  }
  

useEffect(function SayHello() {
  console.log(" call back function Hello");
}, ["hello", "world" ]);



useEffect( SayHello = () => {
    console.log(" arrow function Hello");
  }, ["hello", "world" ]);
  

// This code is a simplified implementation of a custom useEffect function. When called, it logs "useEffect," executes a provided function (in this case, SayHello), logs an array of dependencies (["hello", "world"]), and logs "useEffect end." As a result, "Hello" and the dependencies are displayed in the console.