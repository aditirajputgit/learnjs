const promise1 = new Promise(function(resolve , reject){           //promise ki jgha q and bluebird ka use  krte h
    //do as async task , db call , 
    setTimeout(function(){
        console.log("Async task is complete ");
        resolve()      //connecting resolve 
    },1000)

})

//connecting consume
promise1.then(function(){
    console.log("Promise consumed");
})

//2 part hote h promise ko create krna and consume krna
//promise apne ap m callback leta h 
//promise mtlb jo task future m perform hoga ya fir nahi hoga

//+++++++++ without storing in var  +++++++++++++++//
new Promise(function(resolve , reject) {
    setTimeout(function(){
        console.log("Async2 is complete");
        resolve();
    },1000)
}).then(function(){
    console.log("asyn2 is resolved");
})


//next promise 
const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"aditi" , email :"aditirajp@0886"})
    },1000)
})

promise3.then(function(username){
    console.log(username);
})

//promise fourth
const promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"Aditi",password:123})
        }
        else{
            reject("Error something went wrong");
        }
    },1000)
})

promise4.then((user) => {
    console.log(user);
    return user.username              //ye return type kise const ya var m store ni hota h fir se .then() ka use krte h 
}).then((username) => {
    console.log(username);
}).catch(function(e){
    console.log(e);
}).finally((e) => {
    console.log("promise or rejcted has happened");
})

//promise 5
const promise5 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let user = true;
        if(!true){
            resolve({username:"aman",password:"adi123"})
        }
        else{
            reject("Something went wrong this");
        }
    },1000)
});

//promise hum 2 way m handle kr skte h aync se aur then se
async function consumepromise5(){
    try {
        const res = await promise5
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}
consumepromise5()
//async jo hota h vo directly error ko handle ni kr skta h to try catch block ka use kiya kre 
//then m hum .then and .catch blcok ka use krte h 

//Now time for 
async function getUser(){
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await res.json()
        console.log(data);
    } catch (error) {
        console.log("E: " , error);
    }
}
//getUser()

//isse chej ko then m prinr krna
fetch('https://jsonplaceholder.typicode.com/users').then((respose) => {
    return respose.json()
}).then((res) => {
    console.log(res);
}).catch((error) => console.log(error))





