// problem 1
let a = 10;
let b = 20;
console.log(Math.max(a, b));

// problem 2
let theNum = -5;
let isPositive = Math.sign(theNum);

if (isPositive === -1) {
    console.log('Negative Number');
}  else if (isPositive === 0)  {
    console.log("Zero");
}   else if (isPositive === 1) {
    console.log("Positive Number");
} else {
    console.log("Not a Number");
}

// problem 3
let dividend = 51;

if (dividend % 10 === 0) {
    console.log("Division Success");
} else {
    console.log("Division Failed");
}

// problem 4
let evenOdd = 8;

if (evenOdd % 2 === 0) {
    console.log("Even Number");
} else {
    console.log("Odd Number");
}

// problem 5
let char = "c";

if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
    console.log("The character is in the alphabet.");
} else {
    console.log("The character is not in the alphabet.");
}


// problem 6
let temp = 16;

if (temp >= 30) {
    console.log("Temperature is Hot");
} else if (temp <= 25) {
    console.log("Temperature is Cold");
} else {
    console.log("Temperature is Normal");
}


// problem 7
let x = 10, y = 20, z = 30;

if (x > y && x > z) {
    console.log("The max number is: ", x);
} else if (y > x && y > z) {
    console.log("The max number is: ", y);
} else {
    console.log("The max number is: ", z)
}

// problem 8
let checkingNumb = 15;

console.log((checkingNumb % 2 === 0) ? "Even" : "Odd");

// problem 9
let numOne = 30, numTwo = 100;

if (numOne > 30 && numTwo > 30) {
    console.log("Both Numbers are greater than 30.");
} else {
    console.log("One or both numbers are not greater than 30.");
}

// problem 10
let age = 13;

if (age >= 13 && age <= 19) {
    console.log("Teenager");
} else {
    console.log("Not a Teenager");
}



