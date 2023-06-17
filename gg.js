var selectedRow = null;
// show alrets
function showAlert(message, className){
const div = document.createElement("div");
div.className =`alert alert-${className}`;

div.appendChild(document.createTextNode(message));
const container = document.querySelector(".container");
const main = document.querySelector(".main");
container.insertBefore(div, main);
setTimeout(() => document.querySelector(".alert").remove(), 3000);
}

// clear All Fields
 function clearFields(){
document.querySelector("#name").value = "";
document.querySelector("#phoneNumber").value = "";
document.querySelector("#carplateNumber").value = "";
 }

// add data
document.querySelector("#car-list").addEventListener("", (e) =>{
    e.preventDefault();


    //get from values
const name = document.querySelector('#name').value;
const phoneNumber= document.querySelector('#phoneNumber').value;
const carplateNumber = document.querySelector('#carplateNumber').value;

//validate
if(name == "" || phoneNumber == "" || carplateNumber == ""){
showAlert("please fill in all fields","danger");
}
else{
if(selectedRow == null){
const list = document.querySelector("#car-list");
const row = document.createElement("tr");
row.innerHTML = `
<td>${name}</td>
<td>${phoneNumber}</td>
<td>${carplateNumber}</td>
<td>
<a href="#" class="btn btn-warning btn-sm edit">edit</a>
<a href="#" class="btn btn-danger btn-sm delete">Delete</a>
</td>
`;
list.appendChild(row);
selectedRow = null;
showAlert("car added","success");
}
else{
    selectedRow.children[0].textcontenet = name;
    selectedRow.children[1].textcontenet = phoneNumber;
    selectedRow.children[2].textcontenet = carplateNumber;
    selectedRow = null;
showAlert("car info edited",info)

}
clearFields();
}

});


// Remove data
document.querySelector("#car-list").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("car data deleted ","danger");
    }
  });