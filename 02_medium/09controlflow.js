//Javascript execution context 

//iska mtlb ye hota h ki idar javascript m koi si bhi file kese run kregi 
 //global execution context 
 //local execution context 
 //eval exection content  // ye mongo db m use hota h to jaroori ni  hum isse pde

 //humare pass two phase hote h 
 //1 is memory creation phase or creation phase 
 //2 is execution phase 

 //let understand this by an example so start 
let val1 = 10;
let val2 = 32;
function AddNum(n1,n2) {
    let total = n1+n2;
    return total;
}

let result1 = AddNum(val1,val2);
let result2 = AddNum(5,9);

//First Stage is Globalexecution jisme this a jate h 
//second stage is Memmory Phase - isme sare val liye jate h like 
/* 
    val1 ->undefinned // value sirf assign hogi
    val2 ->undefined 
    addnum ->define  //idar function ki definition 
    result1 -> undefined
    result2 -> undefined
*/ //ye first cycle hoti h

//Now time for exection phase 
/*
    ab sirf vo memory alot hui thi ab unne value assing ho jayegi 
    val1 = 32
    val2 = 43
    addnum = > {
        ye alg se apna exection phase bnayega 
        //ishly fir se 2 phase hoge first memory phase then exection phse
        like memory phase m reult -> undefined , n1 -> undefined , n2 -> undefined
        exection phase m , n1->10 , n2->5,result -> 15
    }
*/

//Now result1 -> function call ho rh ah hfir se addfunction call hoga poora jo uper hua h 



