/*Assignment nom.1
function sayHello(theName, theGender) {
    if(theGender === "Male"){
        console.log(`Hello Mr ${theName}`)
    }else if(theGender === "Female"){
        console.log(`Hello Miss ${theName}`)
    }else{
        console.log(`Hello ${theName}`)
    }
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"
*/

/*Assignment nom.2
function calculate(firstNum, secondNum, operation) {
    if(secondNum === undefined) {
        console.log(`Second Number Not Found`)
        return
    }
    switch(operation){
        case "add" :
            console.log(firstNum + secondNum)
        break
        case "subtract" :
            console.log(firstNum - secondNum)
        break
        case "multiply" :
            console.log (firstNum * secondNum)
        break
        default :
            console.log(firstNum + secondNum)
    }
}

  // Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600
*/

/*Assignment nom.3
function ageInTime(theAge) {
    if(theAge < 10 || theAge > 100){
        console.log(`Age Out Of Range`)
    }else{
        console.log(`
        By month : ${theAge * 12}
        By days : ${theAge  * 365.25}
        By hours : ${theAge * 365.25 * 24}
        By minutes : ${theAge * 365.25 * 24 * 60}
        By secondes : ${theAge * 365.25 * 24 * 60 * 60}    
        `)
    }
}

  // Needed Output
  ageInTime(110); // Age Out Of Range
  ageInTime(38); // Months Example => 456 Months
*/

/*Assignment nom.4
function checkStatus(a, b, c) {
    let name, age, status
    switch(typeof a) {
        case "string" :
            name = a
        break
        case "number" :
            age = a
        break
        case "boolean" :
            status = a
        break
    }

    switch(typeof b) {
        case "string" :
            name = b
        break
        case "number" :
            age = b
        break
        case "boolean" :
            status = b
        break
    }

    switch(typeof c) {
        case "string" :
            name = c
        break
        case "number" :
            age = c
        break
        case "boolean" :
            status = c
        break
    }

    if(status === true){
    console.log(`Hello ${name}, Your Age Is ${age}, You Are Available For Hire`)
    }else{
    console.log(`Hello ${name}, Your Age Is ${age}, You Are Not Available For Hire`)
    }
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
*/

/*Assignment nom.5
function createSelectBox(startYear, endYear) {
    document.write(`<select>`)
    for(let i = startYear; i <= endYear; i++) {
        document.write(`<option value = "i">${i}</option>`)
    }
    document.write(`</select>`)
}
createSelectBox(2000, 2021);
*/

/*Assignment  nom.6
function multiply(...x) {
    let any = 1 
    for(let i = 0 ; i < x.length; i++) {
        if(typeof x[i] === "string") {
            continue
        }
        any *= parseInt(x[i]);
    }
    console.log(any)
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
*/

/**
=========================================
===Random Arguments Function Challenge===
=========================================


function showDetails(a, b, c) {
    let name, age, status
    switch(typeof a) {
        case "string" :
            name = a
        break
        case "number" :
            age = a
        break
        case "boolean" :
            status = a
        break
    }

    switch(typeof b) {
        case "string" :
            name = b
        break
        case "number" :
            age = b
        break
        case "boolean" :
            status = b
        break
    }

    switch(typeof c) {
        case "string" :
            name = c
        break
        case "number" :
            age = c
        break
        case "boolean" :
            status = c
        break
    }

    if(status === true){
    console.log(`Hello ${name}, Your Age Is ${age}, You Are Available For Hire`)
    }else{
    console.log(`Hello ${name}, Your Age Is ${age}, You Are Not Available For Hire`)
    }
}


showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
*/