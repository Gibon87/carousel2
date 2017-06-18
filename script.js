$(function(){
	var carouselList = $("#carousel ul"),
	activeElementIndex = 0;
// koloruje button active 
	function colorIndicator() {
		$('.indicators .indicator').each(function(index, element) {
			$(element).toggleClass('active', index === activeElementIndex);
		});
	}
// przewija slider w prawo
	function moveFirstSlide(){
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem)
		carouselList.css({left:''});
	}

	function changeSlideRight(){
		activeElementIndex++;
		activeElementIndex = activeElementIndex % 5;
		colorIndicator();
		carouselList.animate({'left':-400}, 500, moveFirstSlide);
	}
// przewija slider w lewo
	function moveLastSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");

		firstItem.before(lastItem);
		carouselList.css({right:400});
	}

	function changeSlideLeft() {
		activeElementIndex--;
		if (activeElementIndex < 0) {
			activeElementIndex = 4;
		}
		colorIndicator();
		moveLastSlide();
		carouselList.animate({'right':0}, 500, function () {
			carouselList.css({right:''});
		});
	}

	setInterval(changeSlideRight, 3000); /*<-- przewijanie automatyczene w lewo */

	$('.button.right').click(function() {
		changeSlideRight();
	});

	$('.button.left').click(function() {
		changeSlideLeft();
	});

	colorIndicator();
});