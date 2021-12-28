
  //   var a = document.createElement("p")
  //   a.setAttribute("id","in1");
  //   a.innerHTML=5;
  //   var b = document.createElement("p")
  //   b.setAttribute("id","in2");
  //   b.innerHTML=6;
    
  // var n1 = document.getElementById('in1')
  // var n2 = document.getElementById('in2')
  // var n3 = document.getElementById('addition');
  // n3.innerHTML= n1 + n2;
  // console.log(typeof(n3))
  // document.body.append(p)
  
//   var a = 5;
// var b = 6;
// var p = document.createElement("p")
// p.innerHTML=`${a+b}`
// document.body.append(p);
// var arr=""
  // for(i=1;i<6;i++){
     
  //   console.log(i)
  //   document.getElementById("demo").innerHTML=i;
  // }
// }
  //  var arr = document.getElementById("demo");
  //  for(var i=1;i<6;i++ ){
  //    arr.innerHTML=i;
  //  }

  // Get the elements to be iterated
        // let arr =document.getElementById("demo");
  
        // // Use a regular for-loop
        // for (let i = 1; i < 6; i++) {
  
        //     // Print the current element
        //     console.log(typeof(arr[i]));
        // }

// var arr =[45,4,9,16,25]
// arr.sort(function(a, b){return b - a});
// console.log(arr)
// for (var i=0;i>arr.length;i++){
//   console.log(arr[i])
// }

let numbers = [45,4,9,16,25];
numbers.sort((a,b) => {
    if(a > b) return 1;
    if(a < b) return -1;
    
    for(i=0;i>numbers.length;i++)
  console.log(numbers)
return 0;
});






