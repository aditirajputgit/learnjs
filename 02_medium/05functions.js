//Function akele ni pde jate h inke sath humne toda sa memmory management bhi dekhna pdta h 

//function is like mera 10 line ka code m bar bar use kr skti hu 

function myName() {
    console.log('A');
    console.log('D');
    console.log('I');
    console.log('T');
}

const names = function(){
    console.log('A');
    console.log('D');
    console.log('I');
    console.log('T');
}
// calling function 
//names();
//myName();

function add(n1,n2){
    console.log(n1+n2);
}

//add(19,7) // agar parameters send ni karoge to Nan ans dega

//Functions m hum parameters send krte h and arguments hum jab fuction ko call krte h 

function adding(n1,n2){
    const result = n1+n2;
    //console.log("Siddhartha"); //siddhartha
    return result;
}

const result = adding(19,7) //agar humne add wale m result save krte to ans m undefined a jata 
//console.log(result);

//suppose function ke argument m bhut sari cheeje pass kr di h but parameter m bs kuch 2-3 cheeje a gyi 
//to inko ek rest parameter se send like it is like a spread operation bs depend krta h hum kb use kr rhe h 

function Calculateprice(...num){
    return num;
}

console.log(Calculateprice(39,10,20));
//isse jo result hoga vo array ke form m store ho jayega 
//Hum object and array  ko bhi pass kr skte h as a parameter 
const obje1 = {1:"a",2:"b",3:"c"}
function Some(obje1) {
    console.log(`${Object.values(obje1)} has value ${obje1[1]}`);
}
Some(obje1) // ap jb function ko call krt eh tb bhi call kr skte te aur bd m bhi call kr skte h 
//same array bna kr array ko pass krna aur indexing ki trah hum access kr skte h 


