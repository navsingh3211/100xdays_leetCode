/*
18.) Highest Common Factor(HCF)
  i.) x is called HCF of a & b two conditions :

  ii.) x can completely divide both a & b leaving remainder 0
   iii.) No, other number greater than x can completely divide both a & b
*/
// m:1
// function getHcf(num1:number,num2:number){
//   let hcf:number = 1;
//   let minNum:number = Math.min(num1,num2);
//   for(let i = 1;i<=minNum;i++){
//     if(num1%i===0 && num2%i===0){
//       hcf=i;
//     }
//   }
//   return hcf;
// }
// console.log(getHcf(3,12),'HCF');

//m:2
// function getHcf2(num1:number,num2:number){
//   let num:number = Math.max(num1,num2);
//   let devider:number = Math.min(num1,num2);
//   let reminder = num%devider;
//   let result = devider;
//   while(reminder!=0){
//     num = devider;
//     devider = reminder;
//     reminder = num%devider;
//     result = devider;
//   }
//   return result;
// }
// console.log(getHcf2(36,60),'hcf-m2');


/*19.) Lowest Common Multiple (LCM)*/
