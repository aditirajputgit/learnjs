// in javascript array are resiziable and can store all type of dtatype
//while in other programming language we can store some kind of data

//array ko indexing ke through access krte h 
//array shallow copy bnanata h // shallow copy vo hote h jo same reference type ko point krta h 

//deep copy vo hota h jiski copy bnti h like call by value

const arr1 = [2,5,8,2,10]
const name = ["Aditi","Sid","Aman"]
const arr2 = new Array(1,5,7,"sdi","ksh")

// array m bhut sari protype properties milti h 
//console.log(arr2);
arr2.push("hitesh")
//console.log(arr2);
arr2.pop()
//console.log(arr2);

//shift and unshift naam ki cheej hoti h staring se inster and pop  krna
//console.log(arr1.includes(7));

//console.log(arr1.indexOf(7)); // ye array m 3 kis index pr h vo btata h 

const newArr = arr1.join() // ye aaray ka type change ker dega string m 

//slice and splice 
//slice m particular kuch cheeje cuut ho kr a jati h but original array m koi changes ni ate h
//while splice m hum jo changes krte h vo changes mere original array m effect krt e h 
// like splice use kiya aur kuch postion alg nikali aur ab array ko print kiya to vo slice ke number chor kr sab print ho jayega

//++++++++++++++++++   ARRAY PART 2    ++++++++++++++++++//
const names = ["Aditi","Aman ","nitin","sid"]
const sur = ["Rajput","Thakur","Lodhi","Sinha"]

//names.push(sur) // ye array ke andar arrau le ata h 
//console.log(names);
//const newArray = names.concat(sur) // concat use to merger two array
//console.log(newArray);

//to hum spread ka use krt  h like add krne ke liy e
//spread jo hota h vo (...) se acccess krte h 

const newArray = [...names,...sur]
//console.log(newArray); 

// flat ye ky krt ah array ke anadr array ho aur uske andar array ye sab ko flat ay ek array m present kr deta g
const am = [6,2,6,8 ,[8,2,3] ,8,9 ,[1,,3,4 ,[7,8,] , 10]]
const newAm = am.flat(Infinity)
//console.log(newAm);

// we can create array from string and hum puch bhi skte h array se ki ye object h ya ni 
console.log(Array.isArray("Aditi"));
console.log(Array.from("Aditi"))