$(document).ready(function(){
	
	// Generate 16x16 block grid (256 blocks)

	var blockCount = 256;
	
	while (blockCount > 0) {
		$(".container").append('<div id="block"></div>');
		blockCount--;
	}; 

	// when mouse is clicked in the grid, squares get colored as mouse goes over them
	
	$(".container").mousedown(function(){
		$("div#block").mouseenter(function(){
			$(this).toggleClass("colored");
		});
	});

	// Press reset button to clear drawing space and adjust grid size

	$(".reset").click(function(){
		$("div#block").remove();

		var newCount = prompt("What size should the grid be? (from 1-30)"); // starts getting slow and buggy at 25ish
		var $blockSize = Math.round(400 / newCount) - 1;

		blockCount = newCount * newCount;

		while (blockCount > 0) {
			$(".container").append('<div id="block"></div>');
			$("div#block").css({"height":$blockSize+"px","width":$blockSize+"px"});
			blockCount--;
		}; 
	});
});
