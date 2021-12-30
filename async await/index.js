// single api with async await print output in document
async function foo1 (){
        let na =document.getElementById('btw').value;
        console.log(na);  
        let data=await fetch(`https://api.covid19api.com/total/country/${na}`);
        let result = await data.json();
        
        for(var i in result){
            console.log(`${result[i].Confirmed} ${result[i].Deaths} ${result[i].Recovered}`);
        }
    }
    foo1()
