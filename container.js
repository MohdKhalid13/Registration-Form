var x = null

function onFormSubmit()
{
    var formData = readFormData();
    if(x == null)
    {
        insertNewRecord(formData);
    }
    else
    {
        updateRecord(formData);
    }
    resetForm();
}

function readFormData()
{
    var formData = {};
    formData['fname'] = document.getElementById('fname').value;
    formData['lname'] = document.getElementById('lname').value;
    formData['country'] = document.getElementById('country').value;
    formData['email'] = document.getElementById('email').value;



    return formData;
}  

function refresh()
{
    window.location.reload('refresh')
}

function insertNewRecord(data)
{
    var table = document.getElementById('Registration').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fname;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.lname;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.country;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.email;
    
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a onClick="onEdit(this)" class="btn btn-success btn-sm edit"><i class="far fa-edit" style="pointer-events: none;"></i></a>`;
    
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<a onClick="onDelete(this)" class="btn btn-danger btn-sm delete"><i class="far fa-trash-alt" style="pointer-events: none;"></i></a>`;
}

function resetForm(){
  document.getElementById('fname').value = '';
  document.getElementById('lname').value = '';
  document.getElementById('country').value = '';
  document.getElementById('email').value = '';
  document.getElementById('password').value = '';
  document.getElementById('mob').value = '';
  document.getElementById('gender').value = '';
  document.getElementById('dob').value = '';


  return resetForm()


}


function onEdit(td)
{
    x = td.parentElement.parentElement;
    document.getElementById('fname').value = x.cells[0].innerHTML;
    document.getElementById('lname').value = x.cells[1].innerHTML;
    document.getElementById('country').value = x.cells[2].innerHTML;
    document.getElementById('email').value = x.cells[3].innerHTML;
    
    
}

function updateRecord(formData)
{
    x.cells[0].innerHTML = formData.fname;
    x.cells[1].innerHTML = formData.lname;
    x.cells[2].innerHTML = formData.country;
    x.cells[3].innerHTML = formData.email;
    
  
}



function onDelete(td)
{
  row = td.parentElement.parentElement;
  document.getElementById('Registration').deleteRow(row.rowIndex);
  resetForm()
}





































// const addDocument = async () => {
//     let obj = {

//     }
//     obj.fname = document.getElementById('fname').value
//     obj.lname = document.getElementById("lname").value 
//     obj.email = document.getElementById("email").value 
//     obj.password = document.getElementById("password").value 
//     obj.country =document.getElementById("country").value 
//     obj.mob =document.getElementById("mob").value 
//     obj.male =document.getElementById("male").value 
//     obj.female =document.getElementById("Female").value 
//     obj.dob = document.getElementById("dob").value
//     console.log("obj",obj); 
//     window.localStorage['data_arr'] = new Array();
//     let arr = JSON.parse(window.localStorage.getItem('data_arr'))
//     window.localStorage[arr.length] = obj;

// }