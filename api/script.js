function foo(){
    let na =document.getElementById('btw').value;
    console.log(na);
    async function foo1 (){
        let data=await fetch(`https://api.covid19api.com/dayone/country/${na}`);
        let result = await data.json();
        console.log(result);
        for(var i in result){
            console.log(`${na}: ${result[i].Confirmed}: ${result[i].Deaths}: ${result[i].Recovered}`);
        }
    }
    foo1()

}
