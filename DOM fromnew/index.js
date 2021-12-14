var first = document.createElement("div");
first.innerHTML = "First name";
document.body.append(first);

var box1 = document.createElement("input");
box1.setAttribute("id", "first");
document.body.append(box1);

var middle = document.createElement("div");
middle.innerHTML = "Middle name";
document.body.append(middle);

var box2 = document.createElement("input");
box2.setAttribute("id", "middle");
document.body.append(box2);

var last = document.createElement("div");
last.innerHTML = "Last name";
document.body.append(last);

var box3 = document.createElement("input");
box3.setAttribute("id", "last");
document.body.append(box3);

var email = document.createElement("div");
email.innerHTML = "Email";
document.body.append(email);

var box4 = document.createElement("input");
box4.setAttribute("id", "email");
document.body.append(box4);

var br = document.createElement("br");
document.body.append(br);

var submit = document.createElement("button");
submit.style.marginTop = "20px";
submit.innerHTML = "submit";
submit.setAttribute("onclick", "foo()");
document.body.append(submit);

function foo() {
  let res = document.getElementById("first").value;
  let res1 = document.getElementById("middle").value;
  let res2 = document.getElementById("last").value;
  let res3 = document.getElementById("email").value;
  console.log(res, res1, res2, res3);
}
