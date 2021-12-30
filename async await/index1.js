//multiple api with async and await get output in console


async function getdata(){
   
        let res=await fetch('https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json')
        let result= await res.json();
        console.log(result);
        try {
        
            for(var i in result){
            var name=result[i].name;
            var latlon=result[i].latlng;
             wd(name,...latlon);
        }
    
        } 
    catch (error) {
        console.log("invalid country"+name+error.message);
    }
}

async function wd(name,lat,lon){
    try {
        // if(!lat||!lon) throw new Error("invalid coordinates");
        if(lat===undefined)throw new Error("invalid coordinates")
       let res1=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=665c7c1972e095c200af69c330e7775a`)
       let result1=await res1.json();
       console.log(`${name}:${result1.main.temp}`);

    } catch (error) {
       console.log(error); 
    }
}

getdata();