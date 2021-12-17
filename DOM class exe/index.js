var dateelement = document.createElement("input");
dateelement.setAttribute("type", "date");
dateelement.setAttribute("id", "date");
document.body.append(dateelement);

var button = document.createElement("button");
button.innerHTML = "Display data";
button.className = "btn btn-primary";
button.setAttribute("type", "button");

button.addEventListener("click", displaydate);
document.body.append(button);

function displaydate() {
  let input = document.getElementById("date").value;
  //console.log(typeof(input))
  //return type string to convert string to number
  //using date.parse() we can convert it
  if (Date.parse(input)) {
    var inputdate = new Date(input);
    var currentdate = new Date();
    //getTime() we used to get from date to to date
    var millisecdiff = currentdate.getTime() - inputdate.getTime();
    console.log(millisecdiff);

    var seconddiff = Math.floor(millisecdiff / 1000);
    console.log(seconddiff);

    var minutediff = Math.floor(seconddiff/ 60);
    console.log(minutediff);

    var hoursdiff = Math.floor(minutediff / 60);
    console.log(hoursdiff);
    
    var daydiff = Math.floor(hoursdiff / 24);
    console.log(daydiff)
   //getFullyear() to get years diff corectly
    var yeardiff = currentdate.getFullYear()-inputdate.getFullYear();
    console.log(yeardiff);

    var monthdiff=(yeardiff*12)+(currentdate.getMonth()-inputdate.getMonth());
    console.log(monthdiff);

    
   var data = document.createElement('div');
   data.innerHTML=`Given date ${inputdate} Current date ${currentdate} <br> Year difference ${yeardiff} <br> Month difference ${monthdiff} <br>
   Date difference ${daydiff} <br> Hour difference ${hoursdiff} <br> Minute difference ${minutediff} <br> Seconds difference ${seconddiff} <br>
   Millisecond difference ${millisecdiff}`;
   document.body.append(data)



  }
  else{
    console.log("give a proper valid date");
  }
}


