// var age = parseInt(prompt("enter the age of the person"));



// let p = new Promise((resolve,reject)=>{


//     if (age>=18){
//         resolve("you are eligible")

//     }
//     else{
//         reject("you are not eligible")
//     }
// });

// console.log(p);




// function foo(){
//    return new Promise((resolve,reject)=>{
//        setTimeout(() =>resolve("this is resolve state..."),1000);
           
       
//    })    
// } console.log(foo());

// function foo(){
// return new Promise((resolve,reject)=>{
//     reject("rejected")
//     resolve("eligible")
//     reject("rejected")
// });
// }

// foo().then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);

// });
// console.log(foo());


// var count = 1;
// const p = new Promise((resolve,reject)=>{
//     count=count+1;
//     if(count==2) resolve(count)
//     else reject (count);

// });
// console.log(p);
// p.then((data)=>{
//     console.log(data);
//     return data+5;
// }).then((value1)=>{
//     console.log(value1)

// }).catch((error)=>{
//     console.log(error);
// });

// function foo(num){
//     return new Promise((resolve,reject)=>{
//         resolve(2*num);
// });
// }
// foo(12.then((v1)=>{
//     console.log(v1);

// }))


 
// const p = new Promise((resolve,reject)=>{
//     count=count+1;
//     if(count==2) resolve(count)
//     else reject (count);

// });
// console.log(p);
// p.then((data)=>{
//     console.log(data);
//     return data+5;
// }).then((value1)=>{
//     console.log(value1)

// }).catch((error)=>{
//     console.log(error);
// });