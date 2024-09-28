
var selectedRow = null

function onFormSubmit(){
    event.preventDefault()
    let formData = readFormData()

    if(selectedRow == null){
        insertNewRecord(formData)
    }else{
        updateRecord(formData)
    }

    resetForm()
}

function readformdata(){
    let formdata={};
    formdata['productcode']=document.getElementById('productcode').value
    formdata['income']=document.getElementById('income').value
    formdata['savingsRate']=document.getElementById('savingsRate').value

    console.log(formdata);
    
    return formdata
    
}
function insertNewRecord(data){
    var table = document.getElementById('storeList').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length)

    cell1= newRow.insertCell(0)
    cell1.innerText = data.productCode 

    cell2= newRow.insertCell(1)
    cell2.innerText = data.income

    cell3= newRow.insertCell(2)
    cell3.innerText = data.savingsRate

    cell3= newRow.insertCell(3)
    cell3.innerHTML = `<button onClick="onEdit(this)" > Edit </button> <button onClick="onDelete(this)" > Del </button> `

}
function onEdit(td){
    selectedRow = td.parentElement.parentElement
    console.log("selectedRow", selectedRow);
    document.getElementById('productcode').value== selectedRow.cells[0].innerText;
    document.getElementById('income').value== selectedRow.cells[1].innerText;
    document.getElementById('savingsRate').value== selectedRow.cells[2].innerText;
}

function updateRecord(formData){
    selectedRow.cells[0].innerText =formData.productCode
    selectedRow.cells[1].innerText =formData.income
    selectedRow.cells[2].innerText =formData.savingsRate
    
}

function onDelete(td){
    if(confirm("Delete particular row, are you sure?")){
        let row = td.parentElement.parentElement
    console.log("row", row);
    document.getElementById('storeList').deleteRow(row.rowIndex)
    }    
}










function resetForm(){
    document.getElementById('productcode').value=""
    document.getElementById('income').value=""
    document.getElementById('savingsRate').value=""

    selectedRow = null
}





