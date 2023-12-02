//  function myFunction() {
//     console.log(arguments);
// }
// myFunction(9,10,11,12);
// before rest parameater we use arguments 

function another( a,...params) {
    console.log(params);
    console.log(a);
    
}
another(1,2,6,5,4);
