// let res = fetch('https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json')
// //console.log(res);
// res.then((data)=>{
// return data.json();
// }).then((data)=>console.log(data)).catch((error)=>console.log(error));

// let res = fetch('https://data.covid19india.org/v4/min/timeseries.min.json')
//  //console.log(res);
// res.then((data)=>{
// return data.json();
// }).then((data)=>console.log(data)).catch((error)=>console.log(error));

let res=fetch('https://data.covid19india.org/v4/min/data.min.json');
// console.log(res);
res.then((data)=>{
return data.json();
}).then((data)=>{
    console.log(data.TN.districts.Chennai.total);
   
}).catch((error)=>console.log(error));

let res1=fetch('https://api.covid19api.com/total/country/india');
// console.log(res);
res1.then((data1)=>{
return data1.json();
}).then((data1)=>{
    console.log(data1);
    for(var i in data1){
        console.log(`Confirmed:${data1[i].Confirmed} Active:${data1[i].Active}`)
    }
   
}).catch((error)=>console.log(error));