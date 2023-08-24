// toFixed() : The toFixed() method is used to format a number with a fixed number of decimal places and return it as a string.It allows you to control the precision of a floating-point number by specifying how many decimal places you want to ke

const number = 100.22773427;
const formattedNum = number.toFixed(2);
console.log(formattedNum);

// 2. Math.ceil(x) : The Math.ceil() method rounds a number rounded UP to the nearest integer.
const value = Math.ceil(5.2);
console.log("Ceiling value = " + value);

// 3 Math.floor(x) : The Math.floor() method rounds a number DOWN to the nearest integer.
const num = Math.floor(8.2);
console.log("Floor value = " + num);

// 4 Math.round(x) :The Math.round() method rounds a number to the nearest integer.
// It returns the value of x rounded to the nearest integer value.
// If the decimal part of the number is less than 0.5, it rounds down to the nearest integer value.
// If the decimal part is equal to or greater than 0.5, it rounds up to the nearest integer val

const val1 = Math.round(7.2);
console.log("Round value = " + val1);

const val2 = Math.round(6.6);
console.log("Round value = " + val2);

// 5 Math.pow(x,y) : It returns the value of x raised to the power of y.

const pow = Math.pow(2, 2);
console.log("Power of value = " + pow);

// 6 Math.abs(x) : This function always returns the positive (+ve) value of x.

const value1 = Math.abs(6.2);
console.log("Absolute value = " + value1);

const value2 = Math.abs(-6.2);
console.log("Absolute value = " + value2);

// 7 Math.min(x) : It returns the minimum value from the given arguments.
// 8 Math.max(x) : It returns the maximum value from the given arguments.

const maxnum = Math.max(10, 5, 20);
const minnum = Math.min(10, 5, 20);
console.log("Maximum value = " + maxnum);
console.log("Minimum value = " + minnum);

// 9 Math.sqrt(x) : It returns the square root of x.

const Square = Math.sqrt(256);
      console.log("Square Root = " + Square);
