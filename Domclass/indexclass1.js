// var button = document.createElement("button");
// button.innerHTML="click me";
// button.setAttribute('click',foo);
// document.body.append(button)

// function foo() {
//   var div = document.createElement("div");
//   div.innerHTML = "this is div";
//   div.style.color = "green";
//   div.style.fontSize = "32px";
//   document.body.append(div);
// }

const span = document.querySelector("span");
const div = document.querySelector("div");
div.onmouseover = MouseOver;
div.onmouseout = MouseOut;

function MouseOver() {
  span.style.color = "red";
  div.style.color = "blue";
}

function MouseOut() {
  span.style.color = "black";
  div.style.color = "black";
}

document.querySelector("div").addEventListener("mouseover", foo);

function foo(event) {
  console.log(event);
  var p = document.createElement("p");
  p.setAttribute("class", "text-primary");
  p.innerHTML = `client X:${event.clientX} and client Y:${event.clientY}`;
  document.body.append(p);
}



document.querySelector("button").addEventListener("click", foo);

function foo() {
  let res = prompt("enter any value");
  let p = document.createElement("p");
  p.innerHTML = res;
  p.style.fontSize = "64px";
  document.body.append(p);
}

document.querySelector("main").addEventListener("click", foo1);

function foo1(event) {

}