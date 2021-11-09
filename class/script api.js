


// // let temp = fetch('https://restcountries.com/v2/all')
// // .then((value)=>{
// //     return value.json();
// // }).then((data)=>{
// //     let cn = data[0].name
// //     console.log(cn);
// //     return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cn}&appid=665c7c1972e095c200af69c330e7775a`);
// // }).then((value1)=>{
// //     return value1.json();
// // }).then((value2)=>{
// //     console.log(value2.main);
// // });

// // function foo(){
// //     return fetch('/');

// // }
// // function foo1(){
// //     return fetch('https://restcountries.com/v2/all');
// // }

// // var res=await foo();
// // var res1=await foo1();
// // console.log(res);
// // console.log(res1);

// // let cn;
// // let restcountries=('https://restcountries.com/v2/all');
// // async function foo(){
// //     let restcount = await fetch('https://api.covid19api.com/dayone/country/south-africa');
// //     let restcountdata= await restcount.json();
// //     cn=restcountdata[0].name;
// //     let openweath = await fetch('https://api.openweathermap.org/data/2.5/weather?q=${cn}&appid=665c7c1972e095c200af69c330e7775a');
// //     let openweathdata= await openweath.json();
// //     console.log($().$())
// // }




30-09-21
// //excercise


// // function foo(){
// //     let na =document.getElementById('btw').value;
// //     console.log(na);
// //     async function foo1 (){
// //         let data=await fetch(`https://api.covid19api.com/dayone/country/${na}`);
// //         let result = await data.json();
// //         console.log(result);
// //         for(var i in result){
// //             console.log(`${na}: ${result[i].Confirmed}: ${result[i].Deaths}: ${result[i].Recovered}`);
// //         }
// //     }
// //     foo1()

// // }



01-10-21


// //  read operation

// // HTTP Method: GET

// var url='https://6156a145e039a0001725aab9.mockapi.io/users';

// function getdata(){
//     fetch(url)
//     .then((data)=>data.json()).then((res)=>console.log(res));
// }

// getdata();



// //create operations 

// //HTTP methos: POST

// //headers and data

// // function createdata(){
// //     let data={
// //         name:"nirmal raj",
// //         email:"nirmal@nasa.com"
// //     }
// //     fetch(url,{
// //         method:"POST",
// //         body:JSON.stringify(data),
// //         headers:{
// //             "content-type":"application/json;charset=UTF-8",
// //         }
// //     }).then((data)=>data.json()).then((res)=>console.log(res))
// // }

// // createdata();

// //Update operation

// //HTTP methos: PUT

// //headers and data

// // function updatedata(){
// //     let data={
// //         name:"nirmal raj",
// //         email:"nemo@nasa.com"
// //     }
// //     fetch(url+"/16",{
// //         method:"PUT",
// //         body:JSON.stringify(data),
// //         headers:{
// //             "content-type":"application/json;charset=UTF-8",
// //         }
// //     }).then((data)=>data.json()).then((res)=>console.log(res))
// // }

// // updatedata()




// // // function updatedata(){
// // //     let data={
// // //         name:"nirmal raj",
// // //         email:"nemo@nasa.com"
// // //     }
// // //     fetch(url+"/16",{
// // //         method:"PUT",
// // //         body:JSON.stringify(data),
// // //         headers:{
// // //             "content-type":"application/json;charset=UTF-8",
// // //         }
// // //     }).then((data)=>data.json()).then((res)=>console.log(res))
// // // }

// // // updatedata()


// // //Delete operation

// // //HTTP methos: DELETE

// function deletedata(){
//     fetch(url+'/15',{
//     method:"DELETE",
//     }).then((data)=>data.json()).then((res)=>console.log(res))
// }

// deletedata()




