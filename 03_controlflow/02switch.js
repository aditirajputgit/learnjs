let month = 8
switch (month){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;  
    default:
        console.log("Not done");    
}


/*let email = "aditirajput@gmail.com"
if(email){
    console.log("Got the email "); //ye true hogi kuki isme value h agar empty string hota ("") to neeche wala print ho jata 
}
else{
    console.log("Don't have email please enter the email");
}
*/
//if email m empty array hota to ye true consider krta 
/*
false = false 
0 = flase
-0 = false
0n = flase   //bignit m use hota h ye
"" = false
null = false
undefined = false
Nan = false
*/

/*
"0" = true
'false' = true
" " = true //space di h 
[] = true
{} = treu
function(){} = true //empty function bhi true hota h
*/

//checking array is empty or not 
l/*et arr = []
if(arr.length == 0){
    console.log("Array is empty");
}

//Chaecking Object is empty or not 
const obj = {}
if(Object.keys(obj).length == 0){
    console.log("object is empty");
}
*/

//Nullish coalescing operator (??) : null undefined
//iska use null or undefined jese cases ko solve krne ke liye hua hota h 
let val1 ;
val1 =5 ??10 //5 assign hogi 
val1 = null??98 //98 ayegaaa

//tertany operator and nillish operator alg hota h same ni hote h 
