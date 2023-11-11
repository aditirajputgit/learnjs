// Immediately Invoke Function Expression (IIFE)

// iska mtlb ye hota h jese hi humne function likha vese hi humne invoke krana h
//question in humne ku hmara function immediatelyy start ho kuki like m chahti hu ki meri website jese start ho vese hi data load ho jaye

//iife ka use hum global scope se pollution hota h usse bachne ke liye bhi hum iife ka use krte h 

//()() // ese delcare krte h hum

(function chai(){
    console.log("Hello ji");
})(); // ye function ke bad (;) lgana chaiye kuki function ko ni pta hota h rukna kha h // ese to usse pta hota but ye ek special case h 
//hum chai ko call krne ki need bhi ni pdi 
//global scope ke pollution se problem hoti h kahi bar to hum iife ka use krte h kuki hum isse jaldi se start krn ah 


// name iife and uname iife or simple iffe

(() => {
    console.log("hello babe")
})();

((name) => {
    console.log(`issme parameter pass kiya h jo h ${name}`);
})("aditi Rajput")