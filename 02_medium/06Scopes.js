//{} #ye ek scope hota h 
var c = 500;

if(true){
    let a = 91;
    const b = 65;
    var c = 86;
}

console.log(a); // iska scope sirf function tk to ye error dega
console.log(b); // same iske liye ye bhi ese error dega
console.log(c); //but ye print ho jayega but hon ani chiye ta fior bhi ho gya 

//aur suppose kro hum global c ko print krana chate h but print local  wala c ho rha h 
//to ye bhi problem ati h 
//ishly hum var ko avoid krte h use krn amostly hukm let and const ka use krte h 

