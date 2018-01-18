

function addRow() {
	// variables
	var insertedData = document.getElementById("myData");
	var table = document.getElementById("myTable");
	// counter
	rowCntr = table.rows.length;
	if(insertedData.value != ""){
		var row = table.insertRow(rowCntr);
		row.insertCell(0).innerHTML = '<input type="button" value="delete" onclick = "deleteRow(this)" class="deleteButton" >';
//		row.insertCell(1).innerHTML = '<div id="select_btn" style="background-color:lightgrey;" value="pos/neg"  onclick="changeSelectButtonColor()" onmouseover="changeSelectButtonColorOnMouseOver()" onmouseout="changeSelectButtonColorOnMouseOut()" class="posnegButton"/>Pos/Neg</div>';
		row.insertCell(1).innerHTML = '<div id="select_btn" style="background-color:lightgrey;" value="pos/neg"  />Pos/Neg</div>';
		row.insertCell(2).innerHTML = insertedData.value;
		insertedData.value='';  // clear data from textarea
	}
	else {
		alert("Please enter some comment for the retro");
	}
}

function deleteRow(obj) { // obj indexes which delete button is pushed
    var index = obj.parentNode.parentNode.rowIndex;
	var table = document.getElementById("myTable");
    table.deleteRow(index);

}


/*
// select button handling
var select_state, checked=false;
 function changeSelectButtonColor(){
checked = true;
	if (select_state==0) { // Positive
		select_state=1;
	}
	else {
		select_state=0;
	}
}

function changeSelectButtonColorOnMouseOver(){
if(checked == false)
	return;
if (select_state==0){
		colorNegative();
	}
else{
		colorPositive();
	}
}

function changeSelectButtonColorOnMouseOut(){
if(checked == false)
	return;
if (select_state==0){
		colorPositive();
	}
else{
		colorNegative();
	}
}

function colorPositive(){
	document.getElementById("select_btn").style.background='#00FF00';
	document.getElementById("select_btn").value='Pos';
}

function colorNegative(){
	document.getElementById("select_btn").style.background='#FF0000';
	document.getElementById("select_btn").value='Neg';
}
*/