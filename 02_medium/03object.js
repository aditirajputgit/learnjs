//Now let talk about selkton jo object 1 m vo literal ta 
const tinder = new Object() //seltkon
const tinderUser = {} //non singleton object ni h 

const regularUser = {
    email : "adiitrajaput3098@gmail.com",
    Phoneno : 982728193,
    fullname : {
        firstname:{
            prefix:["miss" , "mr" , "mrs"],
            name: "Aditi",
        },
        SecondName:{
            surname: "Rajput"
        }
    }
}

//console.log(regularUser.fullname.firstname.prefix[2]);

// let merge two object together
const obje1 = {1:"a",2:"b",3:"c"}
const obje2 = {4:"d",5:"e",6:"f"}

//const obje3 = {obje1,obje2} //object ke andar object a rh ah 
//const obje3 = {...obje1,...obje2} //spread method ka use kr skte h add krne ke liye 
//const obje3 = Object.assign({},obje1,obje2) //{} ye dena optional hota h ap pr depend krta h den ah y anis 


//so there are three method to merger two object like array 
//90% time hum spread wala method use  krege

//Array ke andar hum object bhi daal skte h 

const users = [
    {...obje1},
    {...obje2},
    {...obje1,...obje2},
]

console.log(Object.keys(obje1));