/*javascript is dynamic or static # it is dynamic because hum value tabhi define krte h 
        #value define krte to=iem let or const humne datatype ni define krna pdta h 
/*
two type data type - primitive and non-primitive datatype or reference data type
*/

//primitive datatype // ye call by value value hote h
// function m ye copy create ki jati h na ki original send kiya jata h 
//aur jo change hoet h vo copy m hota h 
/*
7 type - string,number , null , undefined , boolean , sysmbol , bigInt
*/
const str = "Aditi";
let num = 72253;
const adi = null;
let useremail;
let isLog = true;
const id = Symbol('1234');
const anotherId = Symbol('1234')

console.table([id,anotherId]);
console.log(id === anotherId);
//Reference data type //call by reference hota 
//function ya kise chej m iska reference hi send kiya jata h 
//Array , object , functions
const heros = ["shaktiman" , "doga" , "tarak", "sid", "papa", "mumma"]
const person = {name : "aditi",
                age : 43,
            }
const myFunction = function(params) {
    console.log("hello world");
}
// return type of data 
/*Number => number
String  => string
Boolean  => boolean
null  => object
undefined  =>  undefined
Symbol  =>  symbol
BigInt  =>  bigint

2) Non-primitive Datatypes
Arrays  =>  object
Function  =>  function
Object  =>  object
*/