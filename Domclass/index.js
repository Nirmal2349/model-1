//defenition with example


//how to create html element dynamically

//01
let division = document.createElement("div");
//<div></div>

//02
division.innerHTML = "this is dynamic div";
//<div> this is div </div>

//03
document.body.append(division);
//output in document

//basic
let division1 = document.createElement("span");

division1.innerHTML = "this is dynamic span";

document.body.append(division1, division);

//additional element
let division2 = document.createElement("span");

//styling:
// using elementname.style.attributename="value";
// inline css
division1.style.backgroundColor = "lightgreen";
division1.style.fontFamily = "courier";

//div tag added
division2.innerHTML = "<div> inner div added </div>";

document.body.append(division2);

//InnerText
let division3 = document.createElement("span");

division3.innerText = "<div> inner div Text </div>";

document.body.append(division3);

//classname,idname:attribute
//set attribute ('attributename:value')
let division4 = document.createElement("span");

division4.setAttribute("class", "main");

division4.innerHTML = "<div> inner div Text </div>";

document.body.append(division4);

//alternaete for setattribute

let division5 = document.createElement("span");

division5.className = "main1";

division5.innerHTML = "<div> inner div Text </div>";

document.body.append(division5);

// already html elements are there we are supposed to print those elements in console...
//Note:element must be there in your html file ,if not will not work

//syntax

//document.getElementById();
//document.getElementByName();
//document.getElementsByTagName()

//check in browser console
// let res = document.getElementById("new")
// console.log(res);

//check in browser console
function foo() {
  let res1 = document.getElementById("new").value;
  console.log(res1);
}

//check in browser console
//output always in array

let res2 = document.getElementsByClassName("new");
console.log(res2);
