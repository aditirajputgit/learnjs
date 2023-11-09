const score = 600
//console.log(score); // 

const newScore = new Number(600)
//console.log(newScore); // array m ayay h  and number ke sath aya h 

//console.log(newScore.toString().length) // ab string m  change ho gya h to string ki sari propery lga skte h hum

//console.log(newScore.toFixed(3)) //value ki precidant value ati h isme like double aur float value kiten tk chaiye h 

const hunders = 877264
//console.log(hunders.toLocaleString('en-IN'));

//++++++++++++++++++++++   MATHS   +++++++++++++++++
// Math libary byDeafult hoti h javasciprt m hume import ya install ni krni hoti h 

//console.log(Math.abs(-23)) // negative value postie m change ho jati h 

//console.log(Math.round(6.7)) // ye round off kr ke deta h values ko
// agar muje control krna h ki konsi value round off hobno chaiye aur konsi ni 
//console.log(Math.ceil(5.2)); // point ke bd agar kuch bhi value ayegi to ye round off kr dega phli value 
//console.log(Math.floor(4.5));// peche kityni bhi bdi value ku na ho vo apne ap round off fkr dega
//console.log(Math.max(/*array ka pss kr do*/ 5,8,2,10));

console.log(Math.random()) // randoe value deta h 
console.log((Math.random()*10) + 1) // value 1 se bdi hogi 
console.log(Math.floor(Math.random()*10)+ 1) //randow value 1 digit m ayegi aur 1 se bdi hogi 
// agar value kise ke in between ki chaiye hogi to
const min= 10
const max = 20
console.log(Math.floor(Math.random() *(max-min + 1)) + min)
