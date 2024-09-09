/*
===============================================
========Assignment of lessones 31 => 32========
===============================================
*/

/*Assignment nom.1
console.log(100 == "100"); // true
console.log(100 < 1000); // true
console.log(110 < 100 + 10 + 20); // true
console.log(-10 == "-10"); // true
console.log(- -50 >= +"-40"); // true
console.log(- 10 <= -"-40"); // true
console.log(+ "10" >= 10); // true
console.log(+ 20 > false); // true
*/

/*Assignment nom.2
let num1 = 10;
let num2 = 20;

console.log(10 < 20); // true
console.log(10 <= 20); // true
console.log(10 != 20); // true
console.log(10 !== 20); // true
console.log(!(10 == 20)); // true
console.log(typeof num1 === typeof num2); // true
*/

/*Assignment nom.3
let a = 20;
let b = 30;
let c = 10;

console.log(a < b && a > c || a == b); // true
console.log(a < b || a > c); // true
console.log(!(a == b) && !(a > b) && !(a === c) && !(a == c)); // true
*/

/*
===============================================
========Assignment of lessones 33 => 37========
===============================================
*/

/*Assignment nom.1
// Test Case 1
let num = 9; // "009"

// Test Case 2
// let num = 20; // "020"

// Test Case 3
// let num = 110; // "110"

if(num < 10){
    console.log(`00${num}`)
} else if(num > 10 && num < 100){
    console.log(`0${num}`)
}else{
    console.log(num)
}
*/

/*Assignment nom.2
let num1 = 9;
let str = "9";
let str2 = "20";

if(num1 == str){
    console.log(`{num1} Is The Same Value As {str}`)
    if(typeof num1 !== typeof str){
        console.log(`{num1} Is The Same Value As {str} But Not The Same Type`)
    }
}
if(num1 != str2 && typeof num1 !== typeof str2){
    console.log(`{num1} Is Not The Same Value Or The Same Type As {str2}`)
}
if(str != str2){
    if(typeof str === typeof str2){
        console.log(`{str} Is The Same Type As {str2} But Not The Same Value`)
    }
}
*/

/*Assignment nom.3
let num1 = 10;
let num2 = 30;
let num3 = "30";

if(num3 > num1 && typeof num3 != typeof num2){
    console.log(`${num3} Is Larger Than ${num1}  And Type string Not The Same Type As number`)
    if(num3 == num2)
        console.log(`${num3} Is Larger Than ${num1} And Value Is The Same As ${num2} And Type string Not The Same Type As number`)
    if(num3 !== num1)
        console.log(`${num3} Value And Type Is Not The Same As ${num1} And Type Is Not The Same As ${num2}`)
}
*/

/*Assignment nom.4
// Edit What You Want Here

let num1 = 11;
let num2 = 10;
let num3 = 11;
let num4 = 33;

Do Not Edit Below This Line
Needed Output
True 7 Times

// Condition 1

if (num1 > num2) {
console.log("True");
} else {
console.log("False");
}

// Condition 2

if (num1 > num2 && num1 < num4) {
console.log("True");
} else {
console.log("False");
}

// Condition 3

if (num1 > num2 && num1 === num3) {
console.log("True");
} else {
console.log("False");
}

// Condition 4

if ((num1 + num2) < num4) {
console.log("True");
} else {
console.log("False");
}

// Condition 5

if ((num1 + num3) < num4) {
console.log("True");
} else {
console.log("False");
}

// Condition 6

if ((num1 + num2 + num3) < num4) {
console.log("True");
} else {
console.log("False");
}

// Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
console.log("True");
} else {
console.log("False");
}
*/

/*
===============================================
========Assignment of lessones 38 => 39========
===============================================
*/

/*Assignment nom.1
let day = "   friday  ";
// You Need To Remove Spaces And Make First Letter Capital => Friday

// let day = "Friday";
// let day = "Saturday";
// let day = "Sunday";
// Output => "No Appointments Available"

// let day = "Monday";
// let day = "Thursday";
// Output => "From 10:00 AM To 5:00 PM"

// let day = "Tuesday";
// Output => "From 10:00 AM To 6:00 PM"

// let day = "Wednesday";
// Output => "From 10:00 AM To 7:00 PM"

// let day = "World";
// Output => "Its Not A Valid Day"

switch(day.trim().charAt(0).toLocaleUpperCase() + day.trim().substring(1)){
    case "Friday":
    case "Saturday":
    case "Sunday" :
        console.log(`No Appointments Available`)
    break;
    case "Monday":
    case "Thursday":
        console.log("From 10:00 AM To 5:00 PM")
    break;
    case "Tuesday" :
        console.log(`From 10:00 AM To 6:00 PM`)
    break;
    case "Wednesday" :
        console.log(`From 10:00 AM To 7:00 PM`)
    break;
    default:
        console.log(`Its Not A Valid Day`)
}
*/

/*
===============================================
===================Challenge 1=================
===============================================
*/

/*
If Condition Challenge

let a = 10;

if (a < 10) {
console.log(10);
} else if (a >= 10 && a <= 40) {
console.log("10 To 40");
} else if (a > 40) {
console.log("> 40");
} else {
console.log("Unknown");
}

// Write Previous Condition With Ternary If Syntax
a < 10 ? 
console.log(10)
: a >= 10 && a <= 40 ?
console.log("10 To 40") : a > 40
? console.log("> 40") 
: console.log("Unknown")
*/

/*
let st = "Elzero Web School";

if ((2*(st.length)).toString() === "34") {
console.log("Good");
}
//OR
if(typeof st === typeof "34"){
    console.log("Good");
}

// W Position May Change
if (st.charAt(st.indexOf('W')).toLocaleLowerCase() === "w") {
console.log("Good");
}

if (st !== "string") {
console.log("Good");
}

if (typeof st.length === "number") {
console.log("Good");
}

if (st.slice(0,6).repeat(2) === "ElzeroElzero") {
console.log("Good");
}
*/

/*
===============================================
===================Challenge 2=================
===============================================
*/

/*
Switch Challenge


let job = "Manager";
let salary = 0;

if (job === "Manager") {
salary = 8000;
} else if (job === "IT" || job === "Support") {
salary = 6000;
} else if (job === "Developer" || job === "Designer") {
salary = 7000;
} else {
salary = 4000;
}
switch(job){
    case "Manager" :
        salary = 8000;
    break;
    case "IT" :
    case "Support" :
        salary = 6000;
    break;
    case "Developer" :
    case "Designer" :
        salary = 7000;
    break;
    default :
        salary = 4000;
}

console.log(salary)

/*
If Challenge

let holidays = 0;
let money = 0;

switch (holidays) {
case 0:
    money = 5000;
    console.log(`My Money is ${money}`);
    break;
case 1:
case 2:
    money = 3000;
    console.log(`My Money is ${money}`);
    break;
case 3:
    money = 2000;
    console.log(`My Money is ${money}`);
    break;
case 4:
    money = 1000;
    console.log(`My Money is ${money}`);
    break;
case 5:
    money = 0;
    console.log(`My Money is ${money}`);
    break;
default:
    money = 0;
    console.log(`My Money is ${money}`);
}

if(holidays === 0) {
    money = 5000;
    console.log(`My Money is ${money}`);
}else if(holidays === 1 || holidays === 2){
    money = 3000;
    console.log(`My Money is ${money}`);
}else if(holidays === 3){
    money = 2000;
    console.log(`My Money is ${money}`);
}else if(holidays === 4){
    money = 1000;
    console.log(`My Money is ${money}`);
}else{
    money = 0;
    console.log(`My Money is ${money}`);
}
*/