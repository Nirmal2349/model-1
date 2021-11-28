
var request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all", true);

request.send();

request.onload = function () {

  var data = JSON.parse(request.response);

  let sum = data

  console.log(data);


  for (var key in data) {
    console.log(data[key].continents);
    // console.log(data[key].name, data[key].capital, data[key].flag);
  }
};
