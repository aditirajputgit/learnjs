const user = {
    name : "Aditi Rajput",
    price: 599,

    welcomeMessage : function(){
        console.log(`${this.name} , Welcome to the server`); //ye scope sirf inta hi h to hum hume apne scope se kuch chaiye hota h to this ka use krna chaiye
        //console.log(this);  //ye current context ki bat krta h isse print krege to humne user ka poora context a jayega object ki form m 
    }
}

//This is used to context the current element 
//user.welcomeMessage()
//user.name = "Aman Rajput"
//user.welcomeMessage()
//console.log(this); //object ke bhar print krege to ye ek empty object ko refer krega {}

//Kuki global ke andar koi context ni h 

//++++++++++++++++   ARROW FUNCTION  ++++++++++++++++//
function chai(){
    console.log(this);
}
//Kise function ke andar this ko print krte aur vo kise ko point bhi ni kr rha ho but globally call krte h to empty ata h 
//iska mtlb h ki this ke andar kuch na kuch to h jise hu access kr ste h 
function chai(){
    let username = "Aditi"
    console.log(this.username); // ye undefined a jayega
}

const chais = function(){
    console.log(this);
}

//ARROW FUNCTION

const chaies = () => {
    console.log(this); // idar bhi {} object ayega na ki normal ya declare function
}

const addTwo = (n1,n2) => {
    let result = n1+n2;
    return result       //emplicit return hota h 
}

//isko hum aur method se bna skte h like 
const addTwos = (n1,n2) => n1+n2   // ye hota h impilicit return type idar humne return type krna jaroori ni h 
const addone = (n1,n2) => (n1+n2) // ye iske andar bhi return type krne ki need ni h but {} ye jb bhi use krege to return type dege


