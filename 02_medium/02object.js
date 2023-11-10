//objects are very very important 
// agar object ko constructor ki trha bnayege to vo singleton bnege 
// aur littereal ki trha bnayege to ni bnege

//object m hum key and value dono define krt eh like a map 
// 

const mysym = Symbol("Key1");

const Jsuser = {
    name : "Aditi",    //bydefault name idar ek string ki trha hoti h 
    "full name" : "Aditi Rajput",
    [mysym] : "mkey1",
    age : 18,
    location : "Indore",
    email : "aditirajput200017@gmail.com",
    isLoggedin : false,
    lastLoginArray: ["Monday" , "wednesday"],
}

//Accessing the element 
//console.log(Jsuser.email);
//console.log(Jsuser["email"]);
//hum square notation ka use kreeg kuki  usse hum string ki key ko bhi access kr payege like fullname wali
//console.log(typeof Jsuser[mysym]);

//agar muje kise object ki value change ni krni h to h8um freeze ka use kr skte h 
//freeze object pr use hoga na ki value pr
Object.freeze(Jsuser.email)

//agar object m function ko pass krna h to ky kr skte h 
Jsuser.greeting = function(){
    console.log("Hello world");
}

console.log(Jsuser.greeting); //function ka bs return type diya h call ni kiy ah properly 
console.log(Jsuser.greeting());

// ab hum chahte h ki function iss object ka name return kre 
Jsuser.greetingTwo = function(){
    console.log(`Hello Jsuser ${this.name}`)
}

console.log(Jsuser.greetingTwo());
//undefined kise reason se ath h