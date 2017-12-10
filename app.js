$(document).ready(function() {
	console.log("document is ready");
	//var pOneMargin = $("#playerOne").css("margin-left");
	var pOneMargin = 0;
	console.log(pOneMargin); 
	$(this).keydown(function() {
		pOneMargin += 5;
		$("#playerOne").css('margin-left', pOneMargin + '%');
		console.log(pOneMargin);
		console.log("playerOne advance");
	});
});