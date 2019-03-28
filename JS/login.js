
			function logbuttonClick(){
				var userID=document.getElementById('username').value;
				if(userID=="client")
				{
					window.location.href="account.html";

				}
				else if(userID=="Admin")
				{
					window.location.href="addStaff.html";


				}
				else if(userID=="Cashier")
				{
					//document.getElementById('feedback').innerHTML = "You are cashier";
					window.location.href="transaction.html";

				}
				else{
					document.getElementById('feedback').innerHTML = "Uknown user !!";
				}
	
			}