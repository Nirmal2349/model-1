//xml http request are used to interact with servers via api

//4 steps

//step 01: create a XHR object (XMLHTTPREQUEST) {new=>keyword}

// whole program should have same name

var request = new XMLHttpRequest();

//step 02: open a connection

//first parameter: " GET "

//second parameter: " api URL "

//optional 3rd parameter : " True "

request.open("GET", "https://restcountries.com/v3.1/all", true);

// step 03: sending a connection

request.send();

//step 04: once a data sucess fully loaded from server(200)

request.onload = function () {
  //data travelling from the server will be in string
  //need to convert from string to object
  //request.response:server response
  var data = JSON.parse(request.response);

  console.log(data);

  // for(var i=0;i<data.length;i++){
  //     console.log(data[i].name)
  // }

  for (var key in data) {
    console.log(data[key].continents);
    // console.log(data[key].name, data[key].capital, data[key].flag);
  }
};
