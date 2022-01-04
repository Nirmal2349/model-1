// CRUD in JS

//C-create-post

//U-update-PUT

//D-delete-Delete

//server: dummy server
var url ="https://61d2891ada87830017e59602.mockapi.io/users";
//GET-Read

//R-Read-GET

// function getdata(){
//     fetch(url)
//     .then((resp)=>resp.json())
//     .then((data)=>console.log(data))
//     .catch((error)=>console.log(error));
// }
function createdata(){
let data={
    name:"nirmal raj",
    email:"nemo157@gmail.com"
}
fetch(url,{
    method:"post",
    body:JSON.stringify(data),
    headers:{
        "content-type":"application/json;charset=UTF-8",
    }
    
})
.then((resp)=>resp.json())
    .then((data)=>console.log(data))
    .catch((error)=>console.log(error));
}
createdata()