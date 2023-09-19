const students = ["Saurabh", "Yogita", "Harsh"];

const sayHello = (studName) => {
  console.log(`Hello ${studName}`);
};
for (let i = 0; i < students.length; i++) {
  sayHello(students[i]);
}
