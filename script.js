
var  request= new XMLHttpRequest();


request.open('GET','https://restcountries.eu/rest/v2/all',true);


request.send();

request.onload=function(){
var data=JSON.parse(request.response);

// for(var i in data){
//     console.log(data[i].name+""+data[i].flag+""+data[i].capital);  
//}
 var result = data.filter((ele=>ele.name==="United State Dollar"));
 console.log(result);
//console.log(data);
// var result = data.filter((ele)=>ele.code=="USD");

// console.log(result);


}