
			function counter(){
				if(typeof(Storage)!=="undefined"){
					if (localStorage.clickcount){
						localStorage.clickcount=Number(localStorage.clickcount)+1;
					}
					else{
						localStorage.clickcount=1;
					}
					document.getElementById("feedback").innerHTML=localStorage.clickcount;
				}
				else{
					document.getElementById("feedback").innerHTML="the browser do not support";

				}
			}
