/*Assignment nom.1
Replace ? With Arithmetic Operators
console.log(10 * 20 * 15 * 3 * 190 * 10 % 400); 
*/

/*Assignment nom.2
let num = 3;

Solution One
console.log(num + num); // 6

Solution Two
console.log(num * num -num); // 6

Soultion Three
console.log(((num * num) + (num * num)) / num); // 6

Soultion Four
console.log(num += num); // 6

Solution Five
console.log(num^num -num); // 6

Solution Six
console.log(num * true); // 6
*/

/*Assignment nom.3
let num = "10";

// Solution One
console.log(+num + +num); // 20

// Solution Two
console.log((-num + -num) *-true); // 20

// Solution Three
console.log(Number(num) + Number(num)); // 20

// Solution Four
console.log(+num + (+true * num)); // 20
*/

/*Assignment nom.4
let points = 10;

// Write Your Code Here

console.log(points+true+true+true); // 13

// Write Your Code Here

console.log(points-true-true); // 8;
*/

/*
Challenge 1
*/

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(b)  
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
[++a] [+]
[++a]
    - Value: 11
    - Explain: preincrement
[+]
    - Explain: add operator
[+b++]
    - value: 20 as a number
    - Explain: Unary operation && postincrement
[+]
    - Explain: add operator
[+c++]
    - value: 80
    - Explain: postIncrement
[-]
- Explain: Subtraction operator
[+a++]
    - value: 11
    - Explain: postIncrement
========================================================
console.log(++a + -b + +c++ - -a++ + +a);
========================================================
[++a]
    - value: 13
    - Explain: preIncrement
[+]
    -Explain:Add operator
[-b]
    - value: -21 as a number
    -  Explain: Negation operator
[+]
    -Explain:Add operator
[+c++]
    - value: 81
    - Explain: postIncrement
[-]
    - Explain: Subtraction operator
[-a++]
    - value: -13
    - Explain: Negation operator & postIncrement
[+]
    -Explain:Add operator
[+a]
    - value: 14
    - Explain:  Unary operator 
=========================================================
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
=========================================================
[--c]
    - value: 81
    - Explain: preDecrement
[+]
    - Explain: Add operator
[+b] 
    -value: 21 as a number
    - Explain: Unary operator
[+]
    - Explain: Add operator
[--a]
    - value: 13
    - Explain: PreDecrement
[*]
    - Explain: multiple operator
[+b++]
    - value: 21 as a number
    -Explain : Unary operator & postIncrement
[-]
    - Explain: Subtraction operator
[+b] 
    -value: 22 as a number
    - Explain: Unary operator
[*]
    - Explain: multiple operator
[a]
    - value: 13
    - Explain: nothing
[+]
    - Explain: Add operator
[--a]
    -value: 12
    -Explain: PreDecrement
[-]
    -Explain: Subtraction operator
[+true]
    - value: 1
    - Explain : Unary operation
*/

/*
Challenge 2

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(-d * +e); // 2000
console.log((+e * f) - -d - -d - -d - -d - g * f + true + true + true); // 173
*/