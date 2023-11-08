// function picnicBudget(number) {
//         switch (((number<=100)||(number>100)&&(number<=200))||(number>200)) {
//             case (number<=100)&&(number>0):
//                 sum=number*5000;
//                 return sum;
//                 break
//                  case (number>100)&&(number<=200):
//                     sum=100*5000;
//                     sum1=(number-100)*4000;
//                     result=sum+sum1;
//                     return result;
//                     break;
//                     case (number>200):
//                         sum=100*5000;
//                         sum1=100*4000;
//                         sum3=(number-200)*3000;
//                         result=sum+sum1+sum3;
//                         return result;
//             default:
//                 return " input value is invalid,please give me correct value"
//                 break;
//         }
//     }
//     console.log(picnicBudget(800));



// ১২. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে। 
// function any(number) {
//     if (number>0) {
//         if (number<=100) {
//             sum=number*5000;
//             return sum;
//             }
//             else if ((number>100)&&(number<=200)){
//                 sum=100*5000;
//                 sum1=(number-100)*4000;
//                 result=sum+sum1;
//                 return result;
//             }
//             else if (number>200){
//                 sum=100*5000;
//                 sum1=100*4000;
//                 sum2=(number-200)*3000;
//                 result =sum+sum1+sum2;
//                 return result;
//             }
        
//     } 
//     else {
//         return "its invalid number"
//     }
    
// }
// console.log(any(100));

// ১৩. এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে।

// function findPositiveNumbers(array) {
//       const positiveNumbers = [];
//     for (const number of array) {
//       if (number >= 0) {
//         positiveNumbers.push(number);
//       } else {
//         break;
//       }
//     }
//     return positiveNumbers;
//   } 
//    inputArray = [3, 5, 7,  8, 10, -2, -4, 12];
//    result = findPositiveNumbers(inputArray);
//   console.log(result);



// function getRandomIntInclusive(min, max) {
    
//     // min = Math.ceil(min);
//     max = Math.floor(max);
//     another= Math.round(Math.random() * (max - min + 1) + min);
//     return another;
//     // The maximum is inclusive and the minimum is inclusive
//   }
// console.log(getRandomIntInclusive(10,20));  


// console.log(Math.random());
let x = Math.floor((Math.random() * 11) + 1);
console.log(x);