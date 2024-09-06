/*Assignment nom.1
// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(1e5); // 100000
console.log(100 * 1000); // 100000
console.log(10 ** 5); // 100000
console.log(1_000_00); // 100000
console.log(Math.pow(10 , 5)); // 100000
console.log(Math.trunc(100000.555555555)); // 100000
console.log(Math.ceil(99999.9)); // 100000
console.log(Math.round(99999.9)); // 100000
console.log(parseInt("100000")); // 100000
console.log(Math.floor(100000.1)); // 100000
*/

/*Assignment nom.2
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
*/

/*Assignment nom.3
console.log(+Number.MAX_SAFE_INTEGER.toString().length); // 16
*/

/*Assignment nom.4
let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(+parseFloat(myVar).toFixed(2)); // 100.57
*/

/*Assignment nom.5
let num = 10;

console.log(+Number.isInteger(num) + +Number.isInteger(num)); // 2
*/

/*Assignment nom.6
let flt = 10.4;

console.log(Math.trunc(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(+flt.toFixed(0)); // 10
*/

/*Assignment nom.7
console.log(parseInt(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4
*/

/*
==============================================================
======================== CHALLENGE ===========================
==============================================================
let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(parseInt(Math.min(a,b,c,d)));

// Use Variables a + d One Time To Get The Needed Output
console.log(a ** Math.trunc(d)); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(Math.floor(d));
console.log(Math.round(d));
console.log(Math.trunc(d));
console.log(parseInt(d));

// Use Variables b + d To Get This Valus
console.log((Math.floor(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
console.log(Math.ceil(b) / Math.ceil(d)); // 67 => Number
*/

/*
==============================================================
===================== STRING SECTION =========================
===================== Lesson 27 => 30 ========================
==============================================================
*/

/*Assignment nom.1
let userName = "Elzero";
console.log(userName[0].toLocaleLowerCase()); // e
console.log(userName.charAt(0).toLocaleLowerCase()); // e
console.log(userName.substring(0,1).toLocaleLowerCase()); // e
console.log(userName.slice(0,1).toLocaleLowerCase()); // e
console.log(userName.substr(0,1).toLocaleLowerCase()); // e
console.log(userName.split("",1).toString().toLocaleLowerCase().repeat(3)); // eee
*/

/*Assignment nom.2
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toLocaleUpperCase())); // True
console.log(word.endsWith(letterO.toLocaleLowerCase())); // True
*/

/*
==============================================================
======================== CHALLENGE ===========================
==============================================================
*/

/*
String Challenge
All Solutions Must Be In One Chain
You Can Use Concatenate

let a = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(a.charAt(2).toLocaleUpperCase() + a.slice(3,6)); // Zero

// 8 H
console.log(a.charAt(13).toLocaleUpperCase().repeat(8)); // HHHHHHHH

// Return Array
console.log(a.split(" ",1)); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(`${a.slice(0,6)} ${a.slice(11)}`); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(a.trim().charAt(0).toLocaleLowerCase()+
            a.trim().slice(1,a.length-1).toLocaleUpperCase()+
            a.trim().charAt(a.length-1).toLocaleLowerCase()
        ); // eLZERO WEB SCHOOl
*/