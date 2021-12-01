var request = new XMLHttpRequest();

request.open(
  "GET",
  "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json",
  true
);

request.send();

request.onload = function () {
  var data = JSON.parse(request.response);
  // console.log(data)

  for (var i in data) {
    // console.log(data[i].name +"-"+ data[i].latlng[0]+","+data[i].latlng[1]);
    try {
      var name = data[i].name;
      var lang = data[i].latlng;
      if (lang.length === 0) throw new Error("Longitude not found ");
      Wd(name, ...lang);
    } catch (e) {
      console.log("invalid coordinates" + name + " " + e.message);
    }
  }

  function Wd(name, lat, lon) {
    var url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=665c7c1972e095c200af69c330e7775a`;

    var request = new XMLHttpRequest();

    request.open("GET", url, true);

    request.send();

    request.onload = function () {
      var data = JSON.parse(request.response);

      console.log(`${name}-${data.main.temp}`);
    };
  }
};

// console.log(name)

// console.log(lat)

// console.log(lon)

// reduce:01

// let sum = data.reduce((acc, item) => acc + item.population, 0);

// console.log(sum);

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

// };
