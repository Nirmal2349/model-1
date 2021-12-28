// let p1= new Promise((resolve,reject)=>{
//     if(5>4){
//         resolve("async success")
//     }
//     else{
//         reject("async fail")
//     }
// });
// console.log(p1)


// var age =parseInt(prompt("enter your age"));

// var p = new Promise((resolve,reject)=>{
//     if(age>=18){
//         resolve("you are eliglible")
//     }
//     else{
//      reject("you are not eliglible")
//     }
// });
// console.log(p);

// p.then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })

// function foo(){
//     return new promise((resolve,reject)=>{
//         // resolve("this is resolved state");
//         // reject("this is rejected state");
//         setTimeout(()=>resolve("hello guvi"),5000);
//     })
// }
// //console.log(foo());
// foo.then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// });
function mul(num){
    return new Promise((resolve,reject)=>{
        
   setTimeout(()=>resolve("resolved"),5000);
   
    })
}
mul(5).then((v1)=>{
console.log(v1);
//mul(10)
return mul(v1);
}).then((v2)=>{
console.log(v2);
return mul(v2);
}).then((v3)=>{
console.log(v3);
}).catch((error)=>{
console.log(error);
});