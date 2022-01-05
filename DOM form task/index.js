// function date(){
//   date.preventDefault();
//   let address = document.getElementById("address").value
//   let gender = document.getElementsByName("gender")
//     let genderValue;
//     for(let i=0;i<gender.length;i++){
//         if(gender[i].checked){
//             genderValue = gender[i].value
//         }
//     }
// }
// function Data(){
//     Data.preventDefault();
    

//     let gender = document.getElementsByName("m")
//     let genderValue;
//     for(let i=0;i<gender.length;i++){
//         if(gender[i].checked){
//             genderValue = gender[i].value
//         }
//     }
//     console.log(gender)
//     let food = document.getElementsByName("food")
//     let foodList = []
//     let foodCount = 0;
//     console.log(food)
//     for(let i=0;i<food.length;i++){
//         if(food[i].checked){
//             foodList.push(food[i].value)
//             foodCount++
//         }
//     }
//     if(foodList.length>=2){
//         result = foodList.join(", ")
//     }else{
//         result = alert("Choose atleast 2 options out of 5 in food")
//     }

//     createTable(fname.value,lname.value,address.value,pin.value,genderValue,result,state.value,country.value)
//     fname.value = ""
//     lname.value = ""
//     address.value = ""
//     pin.value = ""
//     gender.value = ""
//     foodList = [];
//     state.value = ""
//     country.value = ""
// }

// let fname = document.getElementById("fname")
// let lname = document.getElementById("lname")
// let address = document.getElementById("address")
// let pin = document.getElementById("pin")
// let gender = document.getElementById("gender")
// let food = document.getElementById("food")
// let state = document.getElementById("state")
// let country = document.getElementById("country")


// function createTable(fname,lname,address,pincode,gender,food,state,country){
//     let tbody = document.getElementById("tbody")
//     let tr = document.createElement("tr")
//     let td1 = document.createElement("td")
//     let td2 = document.createElement("td")
//     let td3 = document.createElement("td")
//     let td4 = document.createElement("td")
//     let td5 = document.createElement("td")
//     let td6 = document.createElement("td")
//     let td7 = document.createElement("td")
//     let td8 = document.createElement("td")
//     td1.innerHTML = fname;
//     td2.innerHTML = lname;
//     td3.innerHTML = address;
//     td4.innerHTML = pincode;
//     td5.innerHTML = gender;
//     td6.innerHTML = food;
//     td7.innerHTML = state;
//     td8.innerHTML = country;
//     tr.append(td1)
//     tr.append(td2)
//     tr.append(td3)
//     tr.append(td4)
//     tr.append(td5)
//     tr.append(td6)
//     tr.append(td7)
//     tr.append(td8)
//     tbody.append(tr)
// }
function foo(){
  // let firname = document.getElementById("fname").value
  // console.log(firname);
  // let lasname = document.getElementById("lname").value
  // console.log(lasname);
 var ele = document.getElementsByName('g');
              
            for(i = 0; i < ele.length; i++) {
                if(ele[i].checked)
                
                       var  "Gender:"+ele[i].value;
                        console.log(ele)
                        
            }
        }






