//+++++++++++++   REDUCE  +++++++++++++++//
const array1 = [1,2,3,4,5]

const i = 0;
const redusum = array1.reduce(function(acc , currval) {
    return acc+currval;
} , 0)
console.log(redusum);
//Adding ke liye bhi use kr skte h 