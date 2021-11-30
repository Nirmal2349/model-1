var request = new XMLHttpRequest();

request.open(
  "GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json",true
);

request.send();

request.onload = function () {
  var data = JSON.parse(request.response);

  // reduce:01

  let sum = data.reduce((acc, item) => acc + item.population, 0);

  console.log(sum);

  //filter:02

  // let ave = data.filter((item) => item.population > 200000);

  // console.log(ave);

   //filter:03

  // let reg = data.filter((item) => item.region === "Asia");

  // console.log(reg);

  // for(var i=0;i<data.length;i++){
  //     console.log(data[i].name)
  // }

  //   for (var key in data) {
  //     console.log(data[key].continents);
  // console.log(data[key].name, data[key].capital, data[key].flag);
};
// };
