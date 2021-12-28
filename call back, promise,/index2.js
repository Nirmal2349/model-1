let res = fetch('https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json')
console.log(res);
res.then((data)=>{
return data.json();
}).then((data)=>console.log(data)).catch((error)=>console.log(error));