
	var UserRecordsArrays=[];
	function addStaffRecords(){
var id=document.getElementById('userid').value;
var email=document.getElementById('email').value;	
var fname=document.getElementById('fname').value;
var lname=document.getElementById('lname').value;
var pass=document.getElementById('pass').value;
var type=document.getElementById('type').value;	
var isadmin=document.getElementById('isadmin').value;
var action="";

var UserObject={UserId:id, Email: email, FName:fname, LName: lname, Pass:pass, Type:type, IsAdmin:isadmin};

UserRecordsArrays.push(UserObject);
localStorage.UserRecords=JSON.stringify(UserRecordsArrays);	
document.getElementById('feedback').innerHTML="Staff added";

tablecells(id,email,fname,lname,pass,type,isadmin,action);			}
   function tablecells(cid,cemail,cfname,clname,cpass,ctype,cisadmin,caction){
	var tab=document.getElementById("UsersTable");
	var newrow=tab.insertRow();

	newrow.insertCell(0).innerHTML=cid;
	newrow.insertCell(1).innerHTML=cemail;
	newrow.insertCell(2).innerHTML=cfname;
	newrow.insertCell(3).innerHTML=clname;
	newrow.insertCell(4).innerHTML=cpass;
	newrow.insertCell(5).innerHTML=ctype;
	newrow.insertCell(6).innerHTML=cisadmin;

	newrow.insertCell(7).innerHTML='<input type="button" class="buttEdit" value="edit record"/></br> <input onclick="deleteRecord()" type="button" class="buttDel" value="Delete" />'
function deleteRecord(){
	var tab=document.getElementById("UsersTable");
	//var index=tab.rows.selected.rowIndex;
	//tab.deleteRow("...");
}
function viewRecords(){
	document.getElementById('UsersTable');
		if(localStorage.UserRecords){
		UserRecordsArrays=JSON.parse(localStorage.UserRecords);
	}
for(var i=0; i<UserRecordsArrays.length;i++){
	tablecells(UserRecordsArrays[i].UserId,UserRecordsArrays[i].Email,UserRecordsArrays[i].FName,UserRecordsArrays[i].LName,UserRecordsArrays[i].Pass,UserRecordsArrays[i].Type,UserRecordsArrays[i].IsAdmin);
}
}
}