const number1=[1,2,3];
const number2=[4,5,6];
const number3=[7,8,9];
const numbersCombained=[...number1,...number2,...number3];
console.log(numbersCombained);
// basic theme of spread operator 

// const numbers = [1, 2, 3, 4, 5, 6];
// const [one, two, ...rest] = numbers;
// console.log();
const myVehical ={brand:'ford', model: 'Mustang', color: 'red'};
const updateMyVehicle = { type: 'car', year: 2021, color: 'yellow' }
const myUpdatedVehicle = {...myVehical,...updateMyVehicle};
console.log(myUpdatedVehicle);

function sum(x, y, z) {
    return x + y + z;
  }
  
  const numbers = [1, 2, 3];
  
  console.log(sum(...numbers));


  const another =[1,2,3,4,5];
  console.log(another);
 const a =[...another];
//   excat copy of another array
  console.log(a);
