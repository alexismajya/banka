			

			function logbuttonClick(){
			var userID=document.getElementById('username').value;
			var pass=document.getElementById('password').value;
			
				document.getElementById('feedback').style.visibility="visible";


					if (userID=="client")
					{
						window.location.href="accountHistory.html";
					}
					else if(userID=="Admin")
					{
						window.location.href="addStaff.html";


					}
					else if(userID=="Staff")
					{
						window.location.href="transaction.html";

					}
					else{
						document.getElementById('feedback').innerHTML = "Uknown user !!"+returnUserRecords(userID,pass);
					
					}

					document.getElementById('feedback').style.visibility="visible";
					document.getElementById('feedback').style.color="red";
					document.getElementById('feedback').style.border="solid 1px red";

					document.getElementById('feedback').innerHTML="Please enter the userID and password";
				
	
			}
			function returnUserRecords(us,pa){

				var arrUser=[];
			    var userType="";
			    var IsAdmin="false";
					if(localStorage.UserRecords){
		              arrUser=JSON.parse(localStorage.UserRecords);
	                 }
                      for(var i=0; i<arrUser.length;i++){
	                     if(arrUser[i].UserId==us &&arrUser[i].Pass==pa){
		                    userType=arrUser[i].Type;
		                    isAdmin=arrUser[i].IsAdmin;
		                    if (isAdmin=="Yes")
		                    {
		                    	userType="Admin";
		                    }
                          }
                          else{
                          	document.getElementById('feedback').innerHTML="Invalid username and / or password";

                          }
                      }

                      return userType;

			 }

function myFunction() {
				  var x = document.getElementById("myTopnav");
				  if (x.className === "topnav") {
				    x.className += " responsive";
				  } else {
				    x.className = "topnav";
				  }
				}
