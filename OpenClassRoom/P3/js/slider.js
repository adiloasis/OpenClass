var Slider = {

	position : 0,
	slideWidth :  $(".slider").width(),
	
	
	init : function(){
		var _this = this;
		$( ".control.next" ).click(function() {
 			
 			var S = $(".slider").width();
 			var C = $("#slides").width();
 			_this.nextSlide(S,C);
			console.log(_this.position);
 			
		});
		$( ".control.prev" ).click(function() {
			var S = $(".slider").width();
 			var C = $("#slides").width();
 			_this.prevSlide(S,C);
 			console.log(_this.position);
		});
		$(window).resize(function(){
			_this.slideWidth = $(".slider").width();
			// nombre de slide en plus de la position X largeur slide  
		});
	},


	nextSlide : function(slideW,containerW){
		var sliderWidth = $(".slider").width();
		var contenerWidth = $("#slides").width();
		var contener = $("#slides");
		var slides = document.querySelectorAll('#slides .slide');
 		if(this.position < containerW){
	 		contener.animate({
				left: "-="+this.slideWidth,

			}, 1000, function() {
			    // Animation complete.
			});
			this.position += this.slideWidth;
		}else{
			this.position = 0;
			contener.animate({
				left: 0,
				
			}, 1000, function() {
			    // Animation complete.
			});
		}

	},	

	prevSlide : function(slideW,containerW){
		var sliderWidth = $(".slider").width();
		var contenerWidth = $("#slides").width();
		var contener = $("#slides");
		var slides = document.querySelectorAll('#slides .slide');
		 if(this.position != 0){
	 		contener.animate({
				left: "+="+slideW,

			}, 1000, function() {
			    // Animation complete.
			});
			this.position -= slideW;
		}else{
			this.position = containerW;
			contener.animate({
				left: '-'+(containerW),

			}, 1000, function() {
			    // Animation complete.
			});
		}
	},

}