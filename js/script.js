$(document).ready(function (e) {
	
	
	/* buttonAbsolute */
	let buttonAbsolute = $("#buttonAbsolute");
	let intro = $("#intro");
	let introH = intro.innerHeight();
	let scrollPosition = $(window).scrollTop();

	checkScroll(scrollPosition, introH);

	$(window).on("scroll resize", function (e) {
		introH = intro.innerHeight();
		scrollPosition = $(this).scrollTop();
		checkScroll(scrollPosition, introH);
	});

	function checkScroll(scrollPosition, introH) {
		if (scrollPosition >= introH) {
			buttonAbsolute.addClass("show");
		} else {
			buttonAbsolute.removeClass("show");
		}
	}

	buttonAbsolute.on('click', function (e) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, '500');
		return false;
	});

	
	/* Smooth scroll */
	$("[data-scroll]").on("click", function(e) {
		event.preventDefault();
		
		let $this = $(this),
			blockId = $this.data('scroll'),
			blockOffset = $(blockId).offset().top;
	
		$this.addClass("active");
		
		$("html, body").animate({
			scrollTop: blockOffset + 50
		}, 500);
		return false;
	});
	
	
	/* Menu nav toggle */
	let nav = $("#nav");
	let btnMobile = $("#btnMobile");
	
	btnMobile.on("click", function(e) {
		event.preventDefault();
		
		$(this).toggleClass("active");
		nav.toggleClass("active");
		$('body, html').toggleClass("fixed");
	});
	
	
});