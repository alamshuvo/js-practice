//  প্রতিটা ডিক্লারেশন প্রথমে script scope এ জাভাস্ক্রিপ্ট স্টোর করে অতঃপর সেখান থেকে যাকে সম্ভব গ্লোবাল এক্সিকিউশন স্কোপে নিয়ে এক্সিকিউট করে। ফলে var এবং let দুটোই script scope এ আসে,  var pass করে global scope এ যায় কিন্তু let তার strict nature টা মেইনটেইন করতে script scope থেকে আর পাস হয় না। ফলে তখন এক্সিকিউশনে গিয়ে এরর পাই আর সে যে script scope থেকে global scope এ যেতে পারল না বরং ডেড লক হয়ে গেল এটাকে আমরা টেম্পরারি ডেড জোন বলতে পারি



// block scope 
// {
//     var x;
//     x=2;
//     console.log(x);           var is global it has no bound
// }
// console.log(x);


// {
//     let y;
//     y=5;
//     console.log(y);        let is a block scope it has bound.
// }
// console.log(y);


// function scope 



// function a(b) {
//     var x;
//     x=5+b;                function cara onno jekono jagai var likhle t
//                                take global scope boole
//     return x;              var = global+function ;
    
// }                          function er bitor joto kisu takhe sobkisu 
// x=30                       function er local scope ,
// console.log(a(5));          






// before es6 we have 2 scope 1.global scope
                            //   2. function scope 


    // global scope 
    // var x;
    // x=2;
    // console.log(x);
    // {
    //     x=3;
    //     console.log(x);
    // }
    // x=4;
    // console.log(x);


    // function scope 


    // block scope
    // {
    //     var f;
    //     f=20;
    //     // console.log(f);
    // }
    // f=30;

    // console.log(f);
      



    // function a(b) {
    //      x;
    //     x=10+b;
        
    // }
    
var x;

    {
       
    }




