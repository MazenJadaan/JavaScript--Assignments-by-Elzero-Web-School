/*Assignment nom.1
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
myFriends.pop();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.length=num
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
*/

/*Assignment nom.2
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.shift()
friends.pop();
console.log(friends); // ["Eman", "Osama"]
*/

/*Assignment nom.3
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
finalArr = arrOne.concat(arrTwo.pop()).reverse().concat(arrTwo.reverse())
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]
*/

/*Assignment nom.4
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][0].slice(website.length).toLocaleUpperCase()); // ZERO
*/

/*Assignment nom.5
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if(haystack.includes(needle)){
    console.log("Found")
}

if(haystack[haystack.indexOf(needle)] === needle){
    console.log("Found")
}

if(haystack[haystack.lastIndexOf(needle)] === needle){
    console.log("Found")
}
*/

/*Assignment nom.6
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];
// Your Code Here
all = arr1.pop().concat(arr2.pop())
allArrs = arr2.pop().concat(all).toLocaleLowerCase()
console.log(allArrs); // fxy

// Another way
allArrs = allArrs.concat(arr1.slice(arr1.length -true)).concat(arr2.slice(arr1.length -true)).sort().join("").toLowerCase()

console.log(allArrs); // fxy
*/

/*
=====================================
==========ARRAY CHALLENGE============
=====================================
*/

/*
let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here

console.log(my.slice(zero , counter +true).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(zero + true , counter).reverse()); // ["Elham", "Mazero"]

console.log(my.slice(zero + true , counter).reverse()[zero].slice(0,2)+my.slice(zero + true , counter).reverse()[1].slice(2)); // "Elzero"

console.log(my[1].slice(4,5)+my[1][5].toLocaleUpperCase()); // "rO"
*/