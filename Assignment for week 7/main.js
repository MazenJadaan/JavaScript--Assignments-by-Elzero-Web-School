/*Assignment nom.1
let start = 10;
let end = 100;
let exclude = 40;

for(start; start <= end; start += Math.sqrt(end)){
    if(start === exclude){
        continue;
    }
    console.log(start);
}
*/

/*Assignment nom.2
let start = 10;
let end = 0;
let stop1 = 3;

for(start; start >= stop1; start--){
    if(start < (stop1 * stop1 +true)){
        console.log(`${end}${start}`)
    }else{
        console.log(start)
    }
}
*/

/*Assignment nom.3
let start = 1;
let end = 6;
let breaker = 2;

for(start; start <= end; start++){
    console.log(start)
    for(breaker; breaker <= end - true -true; breaker+= true +true){
        console.log(`--${breaker}`)
    }
    breaker = true + true;
}
*/

/*Assignment nom.4
let index = 10;
let jump = 2;

for (;;) {
    console.log(index)
    index--;
    if(index < jump *jump){
        break;
    }
    if(index % jump != false){
        index--
    }
}
*/

/*Assignment nom.5
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let count = letter.length

for(let i = +false; i < friends.length; i++){
    if(friends[i].startsWith( letter.toLocaleUpperCase())){
        continue;
    }
    console.log(`${count} => ${friends[i]}`)
    count++
}
*/

/*Assignment nom.6
let start = 0;
let swappedName = "elZerO";
let lowertCase = []

for(start; start < swappedName.split('').length; start++){
    if(swappedName[start] !== swappedName[start].toLocaleUpperCase()){
        lowertCase.push(swappedName[start].toLocaleUpperCase())
    }else{
        lowertCase.push(swappedName[start].toLocaleLowerCase())
    }
}
console.log(lowertCase.join(''))
*/

/*Assignment nom.7
let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for(start++; start < mix.length; start++){
    if(typeof mix[start] === "string") continue;
    console.log(mix[start])
}
*/

/*
============================
=======While Assignment=====
============================
*/

/*Assignment nom.1
let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

while(index < friends.length) {
    if(typeof friends[index] !== "number" && !friends[index].startsWith("A")){
        counter++
        console.log(`${counter} => ${friends[index]}`)
    }
    index++
}
*/

/*
============================
=======Loop Challeng========
============================


let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];

document.write(`<div>We Have X Admins</div>`);

let counter = 0
for(let i = 0; i < myAdmins.length; i++) {
    if(myAdmins[i] === "Stop"){
        break;
    }
    counter++
}
document.write(`<div>We Have ${counter} Admins</div>`);
document.write(`<hr>`)
let index = 0
let indexOfEmployees = 0 
for( let i = 0; i < counter; i++){
    index++
    document.write(`<h3>The Admin For Team ${index} Is ${myAdmins[i]}</h3>`)
    document.write(`<h2>Team Members :</h2>`)
        for(let k = 0; k < myEmployees.length;k++){
            if(myAdmins[i][0] === myEmployees[k][0]){
                indexOfEmployees++
                document.write(`<div>${indexOfEmployees}- ${myEmployees[k]}</div>`)
            }
        }
        indexOfEmployees = 0 ;
    document.write(`<hr>`)
}
*/
