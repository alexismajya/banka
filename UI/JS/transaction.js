		
var RecordsArrays=[];
	function saveRecords(){
var No=null;
var date=document.getElementById('date').value;	
var type=document.getElementById('transtype').value;
var account=document.getElementById('AccNum').value;
var cashier=document.getElementById('cashier').value;
var amount=document.getElementById('amount').value;	
var balance=null;	

var TransObject={NoT:No, dateT: date, typeT:type, accountT: account, cashierT:cashier, amountT:amount, balanceT:balance};

RecordsArrays.push(TransObject);
localStorage.transactionRecords=JSON.stringify(RecordsArrays);	
document.getElementById('feedback').innerHTML="Saved";

tablecells(No,date,type,account,cashier,amount,balance);			}
   function tablecells(No,date,type,account,cashier,amount,balance){
	var tab=document.getElementById("transactTable");
	var newrow=tab.insertRow();

	newrow.insertCell(0).innerHTML=No;
	newrow.insertCell(1).innerHTML=date;
	newrow.insertCell(2).innerHTML=type;
	newrow.insertCell(3).innerHTML=account;
	newrow.insertCell(4).innerHTML=cashier;
	newrow.insertCell(5).innerHTML=amount;
	newrow.insertCell(6).innerHTML=balance;

	

function viewRecords(){
	document.getElementById('transactTable');
		if(localStorage.transactionRecords){
		RecordsArrays=JSON.parse(localStorage.transactionRecords);
	}
for(var i=0; i<RecordsArrays.length;i++){
	tablecells(RecordsArrays[i].NoT,RecordsArrays[i].dateT,RecordsArrays[i].typeT,RecordsArrays[i].accountT,RecordsArrays[i].amountT,RecordsArrays[i].balanceT);
}
}
}
function myFunction() {
					 var x = document.getElementById("myTopnav");
					  if (x.className === "topnav") {
					    x.className += " responsive";
					  } else {
					    x.className = "topnav";
					  }
				}
