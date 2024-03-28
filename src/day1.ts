/*1.) Positive or Negative number*/
// function dataCheck(num:number):boolean{
//   return num>0;
// }
// console.log(dataCheck(-2));


/*2.) Even or Odd number*/
// function isEven(num:number):boolean{
//   return num%2 === 0;
// }
// console.log(isEven(4));


/*3.) Sum of First N Natural numbers:*/
// function calSum(num:number):number{
//   return (num*(num+1))/2;
// }
// console.log(calSum(5));


/*4.) Greatest of two numbers*/
// function greatestNum(n1:number,n2:number){
//   if(n1>n2){
//     return n1;
//   }else if(n2>n1){
//     return n2;
//   }else{
//     return n1;
//   }
// }
// console.log(`Greatest of two numbers: ${greatestNum(51,8)}`);


/*5.) Greatest of three numbers*/
// function greatestNum(n1:number,n2:number,n3:number){
//   if(n1>n2 && n1>n3){
//     return n1;
//   }else if(n2>n1 && n2>n3){
//     return n2;
//   }else if(n3>n1 && n3>n2){
//     return n3;
//   }else if(n1>n2 && n1===n3){
//     return n1;
//   }else if(n2>n1 && n2===n3){
//     return n2;
//   }else if(n3>n2 && n1===n3){
//     return n3;
//   }
// }
// console.log(`Greatest of two numbers: ${greatestNum(51,88,88)}`);

/*6.)Leap year or not:*/
// function checkLeap(year:number):boolean{
//   return year%4 === 0;
// }
// console.log(checkLeap(2023));


/*7.)Prime number*/
// function checkPrimeNum(num:number):boolean{
//   let result:boolean = true;
//   if(num===2 || num===3){
//     return result;
//   }
//   for(let i=3;i<num;i++){
//     if(num%i==0){
//       result=false;
//       break;
//     }
//   }
//   return result;
// }
// console.log(`is number is prime ?: ${checkPrimeNum(18)}`);


/*8.)Print Prime Numbers In a Given Range*/
// function checkPrimeNumInRange(n1:number,n2:number):number[]{
//   let result:number[]=[];
  
//   for(let i=n1;i<=n2;i++){
//     if(i==2 || i==3){
//       result.push(i);
//       continue;
//     }else{
//       let isPrime:boolean = true;
//       for(let j=2;j<i;j++){
//         if(i%j==0){
//           isPrime=false;
//           break;
//         }
//       }
//       if(isPrime){
//         result.push(i);
//       }
//     }
//   }
//   return result;
// }
// console.log(`Prime num b/w given range ?: ${checkPrimeNumInRange(2,13)}`);


/*9.) Sum of digits of a number*/
// function sumOfDigit(num:number):number{
//   let sum:number=0;
//   while(num!=0){
//     sum = sum + num%10;
//     num = Math.floor(num/10);
//   }
//   return sum;
// }
// console.log(`Sum of digits is: ${sumOfDigit(0)}`);

// function sumOfDigit(num:number):number{
//   let numArr: string[]= num.toString().split("");
//   let sum:number= numArr.reduce((sum,ele)=> sum + parseInt(ele),0);
//   return sum;
// }
// console.log(`Sum of digits is: ${sumOfDigit(123)}`);


/*10.) Reverse of a number */
// function reverseNumber(num:number){
//   return parseInt(num.toString().split('').reverse().join(""));
// }
// console.log(reverseNumber(1234));
// console.log([1,2,3].reverse());

/*11.) Palindrome number:*/
// function palindromCheck(num:number):boolean{
//   return num.toString().split('').reverse().join('') === num.toString().split('').join('');
// }
// console.log(`is number plindron :${palindromCheck(123)}`);

/*12.) Armstrong number*/ 
// function checkArmStrong(num:number){
//   let lenNum:number = num.toString().length;
//   let splitedNumArr = num.toString().split('');
//   return num === splitedNumArr.reduce((sum,ele)=>sum + (parseInt(ele))**lenNum,0);
// }
// console.log(`is armStr number? : ${checkArmStrong(1634)}`);

/*13.) Factorial of a number*/
