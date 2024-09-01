/* Assignment nom.1
let numberOne=10;
let numberTwo=20;
console.log(numberOne+ "" +numberTwo); // Normal Concatenate => 1020
console.log(typeof (numberOne+ "" +numberTwo)); // Normal Concatenate => String
console.log(`${numberOne}${numberTwo}`); // Template Literals Way => 1020
console.log(typeof(`${numberOne}${numberTwo}`)); // Template Literals Way => String
Normal Concatenate
console.log(numberTwo +"\n"+numberOne);
Template Literals Way
console.log(`${numberTwo}
${numberOne}`);
*/


/* Assignment nom.2
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object
*/

/* Assignment nom.3
console.log("`I'm In\n\\\\\nLove\\\\\"\"\"'''\n++ With ++\n \\\"\"\"\\\"\"\"\n\"\"JavaScript\"\"``");
*/

/*Assignment nom.4
let a = 21;
let b = 20;
let z =`_${b}${a}`;
let y =z;
let x =y;

console.log(`_${a}${z}${y}${x}_${b}_`); // _21_2021_2021_2021_20_
/*

===========================================
== Variables And Concatenation Challenge ==
===========================================

const titleVariable=`<h3>Elzero</h3>`,descriptionVariable=`<p>Elzero Web School</p>`,dateVariable=`<span>25/10</span>`;
const card=`
${titleVariable}
${descriptionVariable}
${dateVariable}
`

document.write(card.repeat(4))

*/
