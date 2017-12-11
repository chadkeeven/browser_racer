//make sure document is ready before adding JS
$(document).ready(function() {
	//margin for playerOne, used to move block
	var pOneMargin = 0;
	//margin for playerTwo, used to move block
	var pTwoMargin = 0;
	//event listener for key press to move box
	$(this).keyup(function(event){
		//tests if key up was 'a'
		if (event.which === 65) {
			addMargin(1);
		//tests if key up was 'l'
	}else if (event.which ===76) {
		addMargin(2);
	}		
});
	/*function that adds 5% margin to
	the playerNumber's box, checks if less than 100% margin.
	once margin is equal to or greater than 100% 
	an alert is sent to tell player one won.
	If 100% margin has been met then an alert 
	gives the users feedback telling them the game has ended.
	*/ 
	function addMargin(playerNumber){
		if(!checkForWinner()){
			if (playerNumber === 1) {
				if (pOneMargin < 100){
					pOneMargin += 5;
					$("#playerOne").css('margin-left', pOneMargin + '%');
					if (pOneMargin >= 100){
						setTimeout(function(){alert("Player One Won!");}, 500);
					}
				}
			}else if (playerNumber === 2) {
				if (pTwoMargin < 100){
					pTwoMargin += 5;
					$("#playerTwo").css('margin-left', pTwoMargin + '%');
					if (pTwoMargin >=  100){
						setTimeout(function(){alert("Player Two Won!");}, 500);
					}
				}	
			}
		}else{
			alert("Game has ended");
		}
	}
	//functionto check if there has been a winner to the game!
	function checkForWinner(){
		if(pOneMargin === 100 || pTwoMargin === 100){
			return true;
		}else{
			return false;
		}
	}
});
