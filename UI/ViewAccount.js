function dropdownlistSelect(){
	var SelValue=document.getElementById('filter').value;
	if(SelValue=="one"){
		document.getElementById('viewReco').display="none";
		document.getElementById('search').visibility="none";
	}
}