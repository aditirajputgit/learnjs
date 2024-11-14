// logical operators hmesha truthy and fasly value return krte h 
//In && case agar phli value false mil jati h to vhi se laut jata h[Kuch bhi execute krna h to dono true hona chiaiye]
// in || case agar phli value true mil jai h to vhi se laut jata h 
// falsy values are - "",0,null,undefine, false ,Nan

let a = "" && "Hello"
let c = 0 && 2
console.log(a) // it will return the falsy value[ans = ""]

let b = "" || "hello"
let d = 0 || 2
console.log(b) // it will return the true value[ans = "hello"]

let addResult = "Hello" && 5+5 //iska result 10 ayega

const addResult2 = "Helo" && console.log("Hello")

console.log(typeof [].concat)