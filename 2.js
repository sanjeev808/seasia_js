// Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

// For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.


arr.sort();
let j = 1;
for(let i=0; i<arr.length;i++){
if(arr[i]>j){
// arr[0] =arr[i]
break;
}
if(arr[i] == j ){
j++;
}
}
console.log(j);

let arr = [3,4,-1,1,2];
