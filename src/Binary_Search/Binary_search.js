let arr = [1,2,3,45,46,67,88,99];
let target = 61;
function binarySearchAlgo(arr,target){
  let s = 0;
  let e = arr.length-1;

  while(e>=s){
    let mid = Math.floor(s+(e-s)/2);
    if(target==arr[mid]){
      return mid;
    }else if(target<arr[mid]){
      e = mid - 1;
    }else{
      s = mid + 1;
    }
  }
  return -1;
}

console.log(binarySearchAlgo(arr,target),'binarySearchres');