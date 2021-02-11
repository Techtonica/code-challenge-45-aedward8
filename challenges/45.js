// Given an array of ints length 3, figure out which is larger, the first or last element in the array, and set all the other elements to be that value. Return the changed array.
//
// max_end3([1, 2, 3]) → [3, 3, 3]
//
// max_end3([11, 5, 9]) → [11, 11, 11]
//
// max_end3([2, 11, 3]) → [3, 3, 3]
//
// Bonus Challenge:  Try to do this _without_ initializing a new array.


function max_end3(int_array){
  let arry=[];

  for(let i =0; i<int_array.length;i++)
  if(int_array[0]>int_array[2]) {
    arry.push(int_array[0])
  } else{
    arry.push(int_array[2])
  }
  return arry
}

module.exports = max_end3;
console.log (max_end3([1, 2, 3])) //3 3 3
console.log(max_end3([11, 5, 9])) // 11 11 11
console.log(max_end3([2, 11, 3])) // 3 3 3


// bonus - no new array
function max_end3(int_array){

  for(let i =0; i<int_array.length;i++)
  if(int_array[0]>int_array[2]) {
    int_array[1]= int_array[0]
    int_array[2]= int_array[0]
  } else{
    int_array[0]= int_array[2]
    int_array[1]= int_array[2]
  }
  return int_array
}

module.exports = max_end3;
console.log("Bonus")
console.log (max_end3([1, 2, 3])) //3 3 3
console.log(max_end3([11, 5, 9])) // 11 11 11
console.log(max_end3([2, 11, 3])) // 3 3 3