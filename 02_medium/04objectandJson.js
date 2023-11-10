//important json is important in js
// ++++++++++++++++++ DE - STRUCTURE ++++++++++++++++//
//destructuring array ki vhi hoti aur object ki 
//like api se kese data le rhe h in simple terms

const course = {
    name :"Js course in hindi",
    price: 999,
    by: "aditi",
    timeperiod : "4 month",
}
//hum humne specific cheej ko calal krna h to 2 ways h 
//1. is - console.log(course.name) // agar muje isse bar bar call krn ah to m bar bar course.name krugi ni to iska 2 way ka use krege
//2. is - const {name : n} = course // fir call kr skte h  by n mname

const {name: n} = course
console.log(n);

// {} // cury bracket m jo hota h vo destructing ke liye use kiya jata h 
//ye cheej react m jada ache se smjaya jata h 

//Api in nothing like apna kamam kise pr dalna ab ky hota h phle value server se xml ke form  m ati thi aur
//ab sari ki sari value json ke foem m ati h 

//Agar json k astructure dekhe to vo esa kuch bna kr dega  - 
/*{   name :"Js course in hindi",
    price: 999,
    by: "aditi",
    timeperiod : "4 month",
}*/
//ye objet ki trha dikh rha but object ni h like kuki object m naam hota h aur ye json h jisme naam ni h 
//issme dono cheeje string hoti h key an dvalue
// Ab jaroori ni h ki humne hmesha object hi mile api m array bhi mil skta h 



