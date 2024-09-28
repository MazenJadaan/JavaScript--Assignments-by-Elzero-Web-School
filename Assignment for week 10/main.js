/*Assignment nom.1
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let str = mix.map(function(ele){
    return isNaN(parseInt(ele)) ? ele  : "";
}).reduce(function(acc, curr){
    return `${acc}${curr}`
})

document.write(str)
*/

/*Assignment nom.2
let myString = "EElllzzzzzzzeroo";

let noRepeat = myString.split("").filter(function(ele,index,arr){
    return ele !== arr[index + 1] ? ele : ""
}).reduce(function(acc,curr){
    return `${acc}${curr}`
})

document.write(noRepeat)
*/

/*Assignment nom.3
let myArray = ["E", "l", "z", ["e", "r"], "o"]

let flatten = myArray.reduce(function(acc,curr){
    if (Array.isArray(curr)) {
        return acc.concat(curr);
    } 
    else {
        return acc.concat(curr);
    }
},[]).join("")
// Elzero

document.write(flatten)
*/

/*Assignment nom.4
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let negativeNumbres = numsAndStrings.filter((ele) => {
    return !isNaN(parseInt(ele)) ? ele : ""
}).map((ele) => {
    return -ele
})

document.write(negativeNumbres)
*/

/*Assignment nom.5
let nums = [2, 12, 11, 5, 10, 1, 99];

const sum = nums.reduce(function(acc , curr){
    return curr % 2 === 0 ? acc * curr : acc + curr
},1)

document.write(sum)
*/

/*
=======================================
===Higher Order Functions Challenges===
=======================================

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString.split(",").filter((ele) => {
    return isNaN(parseInt(ele)) ? ele : ""
}).map((ele) => {
    return ele === "_" ? " " : ele
}).reduce((acc,curr ,index ,arr) => {
    return acc !== arr[index + true] ? acc + curr : ""
}).slice(true , -isNaN("string"));

console.log(solution); // Elzero Web School
*/