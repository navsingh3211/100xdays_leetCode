/*
==>ceiling of a number
--> Smallest element in array greater or = target
*/


let arr = [2,3,5,9,14,16,18];
// let arr = [99,88,67,45,3,2,1];
let target = 15;
function ceilingOfNumber(arr,target){
  let s = 0;
  let e = arr.length-1;
  let isAsc = arr[s] < arr[e];
  while(e>=s){
    let mid = Math.floor(s+(e-s)/2);
    if(target==arr[mid]){
      return mid;
    }
    if(isAsc){
      if(arr[mid]>target){
        e = mid - 1;
      }else{
        s = mid + 1;
      }
    }else{
      if(arr[mid]>target){
        s = mid + 1;
      }else{
        e = mid - 1;
      }
    }
  }
  return -1;
}

console.log(ceilingOfNumber(arr,target),'ceilingOfNumber');