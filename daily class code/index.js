function testCheckbox(oCheckbox)
{
    var checkbox_val = oCheckbox.value;
    if (oCheckbox.checked == true)
    {
        alert("Checkbox with name = " + oCheckbox.name + " and value =" +
                checkbox_val + " is checked");
    }
    else
    {
        alert("Checkbox with name = " + oCheckbox.name + " and value =" +
              checkbox_val + " is not checked");
    }
}




// var entry = document.getElementsByClassName("entry");
// entry.addEventListener("click",formdetails);

// var row = 1;

// function formdetails(){
//     var firstname = document.getElementsByClassName("firstname").value;
//     var lastname = document.getElementsByClassName("lastname").value;
//     var address = document.getElementsByClassName("address").value;
//     var pincode = document.getElementsByClassName("pincode").value;
//     var male = document.getElementsByClassName("male").value;
//     var female = document.getElementsByClassName("female").value;
//     var state = document.getElementsByClassName("state").value;
//     var country = document.getElementsByClassName("country").value;

    
//     var biriyani = document.getElementsByClassName("biriyani").value;
//     var meals = document.getElementsByClassName("meals").value;
//     var freshjuice = document.getElementsByClassName("freshjuice").value;
//     var chats = document.getElementsByClassName("chats").value;
//     var desserts = document.getElementsByClassName("desserts").value;
//     // if(!biriyani|| !meals || !freshjuice || !chats || !desserts){
//     //     alert("please fill the form submission");
//     //     return;
    
    

//     // if(!firstname|| !lastname || !address || !pincode || !male ||!female || !state || !country){
//     //     alert("please fill the form submission");
//     //     return;
//     // }


// var display = document.getElementsByClassName("display");
// var newRow = display.insertRow(row);

// var cell1 = newRow.insertCell(0);
// var cell2 = newRow.insertCell(1);
// var cell3 = newRow.insertCell(2);
// var cell4 = newRow.insertCell(3);
// var cell5 = newRow.insertCell(4);
// var cell6 = newRow.insertCell(5);
// var cell7 = newRow.insertCell(6);
// var cell8 = newRow.insertCell(7);


// cell1.innerHTML=firstname;
// cell2.innerHTML=lastname;
// cell3.innerHTML=address;
// cell4.innerHTML=pincode;
// cell5.innerHTML=male;
// cell6.innerHTML=female;
// cell7.innerHTML=state;
// cell8.innerHTML=country;
// }