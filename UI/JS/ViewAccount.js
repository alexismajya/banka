function onselectValue(){
	var SelValue=document.getElementById('filter').value;
	if(SelValue=="all"){
		document.getElementById('legendsearch').style.visibility="hidden";
		document.getElementById('legendview').style.visibility="visible";
	}
	else if(SelValue=="one") {
		document.getElementById('legendsearch').style.visibility="visible";
		document.getElementById('legendview').style.visibility="hidden";
	}
	else
	{
		document.getElementById('legendsearch').style.visibility="hidden";
		document.getElementById('legendview').style.visibility="hidden";

	}
}
function viewRecords(){
	document.getElementById('ViewTable');
		if(localStorage.transactionRecords){
		RecordsArrays=JSON.parse(localStorage.transactionRecords);
	}
for(var i=0; i<RecordsArrays.length;i++){
	tablecells(RecordsArrays[i].NoT,RecordsArrays[i].dateT,
		RecordsArrays[i].typeT,RecordsArrays[i].accountT,
		RecordsArrays[i].amountT,RecordsArrays[i].balanceT);
}
document.getElementById('legendview').style.visibility="visible";
}

function tablecells(No,date,type,account,cashier,amount,balance){
	var tab=document.getElementById("ViewTable");
	var newrow=tab.insertRow();

	newrow.insertCell(0).innerHTML=No;
	newrow.insertCell(1).innerHTML=date;
	newrow.insertCell(2).innerHTML=type;
	newrow.insertCell(3).innerHTML=account;
	newrow.insertCell(4).innerHTML=cashier;
	newrow.insertCell(5).innerHTML=amount;
	newrow.insertCell(6).innerHTML=balance;
	newrow.insertCell(7).innerHTML='<input type="button" class="buttEdit" value="Activate"/></br> <input onclick="deleteRecord()" type="button" class="buttDel" value="Delete" />';
}
function myFunction() {
	var x = document.getElementById("myTopnav");
		if (x.className === "topnav") {
			 x.className += " responsive";
		} else {
			   x.className = "topnav";
		}
}
