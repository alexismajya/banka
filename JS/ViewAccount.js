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
	document.getElementById('legendview').style.visibility="visible";

}
