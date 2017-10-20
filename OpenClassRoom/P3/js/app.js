$(document).ready(function() {
    var slider = Object.create(Slider);
    var gmap = Object.create(Gmap);
    var resa = Object.create(Reservation);
    var canvas = Object.create(Canvas);
    var compteur = Object.create(countdownManager);
    compteur.init();
	canvas.init();
    slider.init();
    gmap.init();
    resa.init();
    
});

