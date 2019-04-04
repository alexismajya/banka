
			function signupbuttonClick(){
				//var userID=document.getElementById('userid').value;
				
				returnLastUserID();
        //window.location.href="account.html";
=======
					//window.location.href="account.html";


			}
			function returnLastUserID(){

			    var lastid=0;
					if(localStorage.UserRecords){
		              arrUser=JSON.parse(localStorage.UserRecords);
		              lastid=arrUser[arrUser.length-1].userId;
	                 }
                      

                      document.getElementById('userid').innerHTML=lastid;
                      document.getElementById('Fname').innerHTML=lastid;

			 }

		