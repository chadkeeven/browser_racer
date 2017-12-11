//make sure document is ready before adding JS
$(document).ready(function() {
	//margin for playerOne, used to move block
	var pOneMargin = 0;
	//event listener for key press to move box
	$(this).keyup(function(event){
		//tests if key up was 'a'
		if (event.which === 65) {
			addMarginToOne();
		} 		
	});
	/*function that adds 5% margin to
	playone box, checks if less than 100% margin.
	once margin is equal to or greater than 100% 
	an alert is sent to tell player one won.
	If 100% margin has been met then an alert 
	gives the users feedback telling them the game has ended.
	*/ 
	function addMarginToOne(){

		if (pOneMargin < 100){
			pOneMargin += 5;
			//console.log(pOneMargin);
			$("#playerOne").css('margin-left', pOneMargin + '%');
			if (pOneMargin >= 100){
				setTimeout(function(){alert("Player One Won!");}, 500);
			}
		}else{
			alert("Game has ended");
		}
	}
});
