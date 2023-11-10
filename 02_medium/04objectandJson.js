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
