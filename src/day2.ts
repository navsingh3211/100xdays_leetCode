/*13.) Factorial of a number*/
// function fact(num:number):number{
//   if(num===0 || num===1){
//     return 1;
//   }
//   return num*fact(num-1);
// }
// console.log(fact(5),"DSA res");


/*14.) Factor of a number*/
// function findFactor(num:number):number[]{
//   let result:number[]=[];
//   for(let i=1;i<=num;i++){
//     if(num%i===0){
//       result.push(i);
//     }
//   }
//   return result;
// }
// console.log(findFactor(100),'findFactor');


/*15.) Finding Prime Factors of a number*/
// function findPrimeFactor(num:number):number[]{
//   let factors:number[]=[];
//   let primeFactors:number[]=[];

//   for(let i=2;i<num;i++){
//     if(num%i===0){
//       factors.push(i);
//     }
//   }
//   for(let ele of factors){
//     if(ele === 2){
//       primeFactors.push(ele);
//       continue;
//     }
//     let isPrime = true;
//     for(let i=2;i<ele;i++){
//       if(ele%i==0){
//         isPrime = false;
//         break;
//       }
//     }
//     if(isPrime){
//       primeFactors.push(ele);
//     }
//   }
//   return primeFactors;
// }
// console.log(findPrimeFactor(210),'findPrimeFactor');


/*16.) Check Whether or Not the Number is a Strong Number*/
// function isStrongNumber(num:number):boolean{
//   let sum:number = 0;
//   let numArr = num.toString().split('');
//   for(let ele of numArr){
//     let fact:number = 1;
//     if(parseInt(ele) === 0){
//       fact=1;
//       sum = sum + fact;
//       continue;
//     }
//     for(let i = 1;i<= parseInt(ele) ;i++){
//       fact = fact * i;
//     }
//     sum = sum + fact;
//   }
//   return sum === num;
// }
// console.log(isStrongNumber(145),'isStrongNumber');


/*17.) Perfect number
  --> A Number that can be represented as 
  the sum of all the factors of the number is known as a Perfect Number.
  28 = 1 + 2 + 14 + 4 + 7
*/
// function isPrefectNumber(num:number){
//   let factors:number[] = [];
//   for(let i=1;i<num;i++){
//     if(num%i === 0){
//       factors.push(i);
//     }
//   }
//   // console.log(factors);
//   return num === factors.reduce((sum,ele)=>sum+ele,0);
// }
// console.log(isPrefectNumber(42),'isPrefectNumber');

/*18.) Check Whether or Not the Number is an Automorphic Number
  A number whose square ends with the same number is known as an Automorphic number.
*/
// function isAutomorphic(num:number){
//   let numSquare:number = num**2;
//   let numLen:number = num.toString().length;
//   let lastNumber = numSquare.toString().slice(-numLen);
//   return num === parseInt(lastNumber);
// }
// console.log(isAutomorphic(5),'isAutomorphic');


