$(document).ready(function() {
	//console.log("document is ready");
	//var pOneMargin = $("#playerOne").css("margin-left");
	var pOneMargin = 0;
	//console.log(pOneMargin); 
	$(this).keyup(function(){
		addMarginToOne();		
	});
	function addMarginToOne(){

		if (pOneMargin < 90){
			pOneMargin += 5;
			//console.log(pOneMargin);
			$("#playerOne").css('margin-left', pOneMargin + '%');
			if (pOneMargin >= 90){
				setTimeout(function(){alert("Player One Won!");}, 500);
			}
		}else{
			alert("Game has ended");
		}
	}
});
