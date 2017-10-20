var Canvas = {

	// Variables :
	color : "#000", // Couleur du pinceau
	width_brush : 5, // Largeur du pinceau
	painting : false, // Suis-je en train de dessiner ?
	started : false, // Ai-je commencÃ© Ã  dessiner ?
	canvas : 0, 
	context : 0, 
	cursorX : 0, 
	cursorY : 0, // Variables concernant le canvas dÃ©finies plus tard

	// Canvas :
	canvas : $("#canvas"),

	// Trait arrondi :
	

	/// Initialisation des touches : 

	init : function(){
		_this = this;
		this.context = this.canvas[0].getContext('2d');
		this.context.lineJoin = 'round';
		this.context.lineCap = 'round';
		// Doigt enfonce sur le canvas, je dessine :
		this.canvas.bind('touchstart', function(e) {
			_this.moveStart(e, true, this);
		});
	
		// Relachement du doigt sur tout le document, j'arrete de dessiner :
		$(this).bind('touchend', function() {
			_this.moveEnd();
		});
		
		// Mouvement du doigt sur le canvas :
		this.canvas.bind('touchmove', function(e) {
			_this.move(e, true, this);
		});

		//________souris_______//

			// Click souris enfonce sur le canvas, je dessine :
		this.canvas.mousedown(function(e) {
			_this.moveStart(e, false);
		});
		
		// Relachement du Click sur tout le document, j'arrete de dessiner :
		this.canvas.mouseup(function() {
			_this.moveEnd();
		});
		// Mouvement de la souris sur le canvas :
		this.canvas.mousemove(function(e) {
			_this.move(e, false, this);
		});
	},
	// -----------------------
	// Fonctions de dessin :
	// -----------------------
	// Fonction qui dessine une ligne :
	drawLine : function(){
		// Si c'est le dÃ©but, j'initialise
		if (!this.started) {
			// Je place mon curseur pour la premiÃ¨re fois :
			this.context.beginPath();
			this.context.moveTo(this.cursorX, this.cursorY);
			this.started = true;
		} 
		// Sinon je dessine
		else {
			this.context.lineTo(this.cursorX, this.cursorY);
			this.context.strokeStyle = this.color;
			this.context.lineWidth = this.width_brush;
			this.context.stroke();
		}
	},

	// Clear du Canvas :
	clear_canvas : function(){
		this.context.clearRect(0,0, this.canvas.width(), this.canvas.height());
	},

	// -----------------------
	// Fonctions Event :
	// -----------------------

	// Fonction de mouvement :
	move : function(e, mobile, obj) {
		// Si je suis en train de dessiner (click souris enfoncÃ©) :
		if (this.painting) {
			if (mobile) {
				// Event mobile :
				var ev = e.originalEvent;
				e.preventDefault();
				
				// Set CoordonnÃ©es du doigt :
				// cursorX = (ev.pageX - obj.offsetLeft); // 10 = dÃ©calage du curseur
				// cursorY = (ev.pageY - obj.offsetTop);
				this.cursorX = (ev.targetTouches[0].pageX - obj.offsetLeft); // 10 = dÃ©calage du curseur
				this.cursorY = (ev.targetTouches[0].pageY - obj.offsetTop);
			}
			else {
				// Set CoordonnÃ©es de la souris :
				this.cursorX = (e.pageX - obj.offsetLeft); // 10 = dÃ©calage du curseur
				this.cursorY = (e.pageY - obj.offsetTop);
			}
			
			// Dessine une ligne :
			this.drawLine();
		}
	},

	// Fonction fin de mouvement :
	moveEnd : function(){
		this.painting = false;
		this.started = false;
	},

	//  Fonction dÃ©but de mouvement :
	moveStart : function(e, mobile, obj) {
		this.painting = true;
		
		// CoordonnÃ©es de la souris :
		if (mobile) {
			// Event mobile :
			var ev = e.originalEvent;
			e.preventDefault();
			
			// Set CoordonnÃ©es du doigt :
			this.cursorX = (ev.pageX - obj.offsetLeft); // 10 = dÃ©calage du curseur
			this.cursorY = (ev.pageY - obj.offsetTop);
		}
		else {
			// Set CoordonnÃ©es de la souris :
			this.cursorX = (e.pageX - this.offsetLeft);
			this.cursorY = (e.pageY - this.offsetTop);
		}
	},
}