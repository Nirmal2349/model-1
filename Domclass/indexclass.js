//already html elements are there we are supposed to print those elements in console...
//Note:element must be there in your html file,if not will not work

//document.getElementById(),document.getElementsByclassName(),document.getElementsByTagname
//queryselector vs queryselectorall
//table using DOM

// let a = document.querySelectorAll(".main");
//based upon the selector
//first occurence of the  selector

//query selector all will retrive all  the elements whose selector must be there
//output will be in array

// console.log(a);

//how to construct table in DOM

var table = document.createElement("table");
table.setAttribute("class", "table");
//<table class="table"></table>

var thead = document.createElement("thead");
thead.setAttribute("class", "thead-dark");
//<thead class="thead-dark"></thead>

var tr = document.createElement("tr");
//<tr></tr>
var th1 = createelement("th", "first");
var th2 = createelement("th", "last");
tr.append(th1, th2);
thead.append(tr);
table.append(thead);

var tbody = document.createElement("tbody");
var tr = document.createElement("tr");
var td1 = createelement("td", "nirmal");
var td2 = createelement("td", "raj");

tr.append(td1, td2);
tbody.append(tr);

var tr = document.createElement("tr");
var td3 = createelement("td", "Jacob");
var td4 = createelement("td", "Thornton");
tr.append(td3, td4);
tbody.append(tr);

var tr = document.createElement("tr");
var td5 = createelement("td", "Larry");
var td6 = createelement("td", "the Bird");
tr.append(td5, td6);
tbody.append(tr);
table.append(tbody);
document.body.append(table);

function createelement(elename, value = "") {
  //ele.div
  //value.content
  var element = document.createElement(elename);
  element.innerHTML = value;
  console.log(element);
  //<th>first</th>

  return element;
}
