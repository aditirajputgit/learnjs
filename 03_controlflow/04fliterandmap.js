const coding = ["js","c++","python","Ruby","java"]

//coding.forEach((item) => {
//    console.log(item);
//})
//agar muje iski value kise m store krani h ya kuch bhi to hum fliter ka use krege


const mynum = [1,3,4,,6,8,1,2,3,4]

//const value = mynum.filter((item) => item >=4)
/*
const value = mynum.filter((item) => {
    return item >= 4      //humne return ka use krna pdega kuki function explicity return krta h {} bracket m 
})
*/

//Agar hume isse foreach m hi use krna hota to
const newnum = []
mynum.forEach((num) => {
    if(num >= 4){
        newnum.push(num)
    }
})

//console.log(newnum);


//Lets have some example
const books =[
    {title: "Book one" ,gener:"English",publish:1982 , edition: 2004},
    {title: "Book two" ,gener:" History",publish:1912 , edition: 2009},
    {title: "Book three" ,gener:"geo",publish:1992 , edition: 2010},
    {title: "Book four" ,gener:"Math",publish:2000 , edition: 2002},
    {title: "Book five" ,gener:"History",publish:2003 , edition: 2004},
    {title: "Book six" ,gener:"Programming",publish:2004 , edition: 2008},
    {title: "Book seven" ,gener:"Math",publish:2004 , edition: 2011},
    {title: "Book eight" ,gener:"English",publish:1999 , edition: 2002},
    {title: "Book nine" ,gener:"Gk",publish:2005 , edition: 2009}
]

const userBooks = books.filter((bk) => {
    return bk.edition >= 2004
} )
//console.log(userBooks);

let numbers = [1,2,3,4,5,6,7,8]
//const newNums = numbers.map((num) => {return num*10})
const newNums = numbers.map(
    (num) => {return num*10}).map((num) => num+1).filter((num) => {return num>=20})
console.log(newNums);

