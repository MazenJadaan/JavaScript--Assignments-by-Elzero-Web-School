/*Assignment nom.1 
function getDetails(zName, zAge, zCountry) {
    let subString ,onlyAge, twoLetters
    function namePattern(zName) {
        let space = String(zName).indexOf(" ")
        let bigLetter = String(zName).slice(space , space + 2).toLocaleUpperCase()
        subString = String(zName).slice(0,space)
        return subString + bigLetter +"."
    }
    function ageWithMessage(zAge) {
        onlyAge =  parseInt(zAge)
        return onlyAge
    }
    function countryTwoLetters(zCountry) {
        twoLetters = String(zCountry).slice(0,2).toLocaleUpperCase()
        return twoLetters
    }
    function fullDetails() {
        return namePattern(zName) + " Your Age Is " + ageWithMessage(zAge) + " You Live In " + countryTwoLetters(zCountry)
    }
    return fullDetails(); 
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));


console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
*/


/*Assignment nom.2
// function itsMe() {
//     return `Iam A Normal Function`;
// }

let itsMe  = ()=>{
    return `Iam An Arrow Function`
}

console.log(itsMe()); // Iam A Normal Function

// function urlCreate(protocol, web, tld) {
//     return `${protocol}://www.${web}.${tld}`;
// }

let urlCreate = (protocol, web, tld) => {
    return `${protocol}://www.${web}.${tld}`
}

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org
*/

/*Assignment nom.3
// function checker(zName) {
//     return function (status) {
//         return function (salary) {
//             return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
//         };
//     };
// }

let checker = (zName, status, salary) => {
    return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
}

console.log(checker("Osama" , "Available", 4000));
console.log(checker("Osama" , "Not Available"));

// console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
// console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble
*/

/*Assignment nom.4
function specialMix(...data) {
    let sum = 0;
    let allStrings = true;  

    for (let i = 0; i < data.length; i++) {
        if (typeof data[i] === "number") {
            sum += data[i];
            allStrings = false;  
        } else if (typeof data[i] === "string") {
            let num = parseInt(data[i]);
            if (!isNaN(num)) {
                sum += num;
                allStrings = false;  
            }
        }
    }

    if (allStrings) {
        return "All Is Strings";
    }

    return sum;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
*/

/*
=====================================
=======Arrow Function Challenge======
=====================================
*/

/*Challenge nom.1
// let names = function (...name) {
//     return `String [${name.join("], [")}] => Done !`;
// };

let names = (...name) => {
    return `String [${name.join("], [")}] => Done !`;
}

console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
  // String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !
*/

/*Chanllenge nom.2
let myNumbers = [20, 50, 10, 60];

// let calc = (one, two, ...nums) => one + two + nums[0];

let calc = function (one, two, ...nums) {
    return one + two + nums[0];
}
console.log(calc(10, myNumbers[0], myNumbers[1])); // 80
*/