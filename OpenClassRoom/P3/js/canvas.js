var Canvas = {
	context : document.getElementById('canvas').getContext("2d"),
	clickX : new Array(),
	clickY : new Array(),
	clickDrag : new Array(),
	paint : 0,
	init : function(){
		
		var _this = this;
		$('#canvas').mousedown(function(e){
		  	var mouseX = e.pageX - this.offsetLeft;
		  	var mouseY = e.pageY - this.offsetTop;
			console.log(e.pageX+ '   ' +this.offsetTop+'   '+_this)	;
		  	paint = true;
		  	_this.addClick(mouseX, mouseY);
		  	_this.redraw();
		});
		$('#canvas').mousemove(function(e){
		  	if(_this.paint){
		    	_this.addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
		    	_this.redraw();
		  	}
		});
		$('#canvas').mouseup(function(e){
		  _this.paint = false;
		});

		$('#canvas').mouseleave(function(e){
		  _this.paint = false;
		});
	},


	addClick(x, y, dragging)
	{
		this.clickX.push(x);
	  	this.clickY.push(y);
	  	this.clickDrag.push(dragging);
	},

	redraw(){
	  	this.context.clearRect(0, 15, this.context.canvas.width, this.context.canvas.height); // Clears the canvas
	  
	  	this.context.strokeStyle = "#df4b26";
	  	this.context.lineJoin = "round";
	  	this.context.lineWidth = 5;
				
	  	for(var i=0; i < this.clickX.length; i++) {		
	 	   	this.context.beginPath();
	   		if(this.clickDrag[i] && i){
	      		this.context.moveTo(this.clickX[i-1], this.clickY[i-1]);
	     	}else{
	      		this.context.moveTo(this.clickX[i]-1, this.clickY[i]);
	     	}
	     	this.context.lineTo(this.clickX[i], this.clickY[i]);
	     	this.context.closePath();
	     	this.context.stroke();
	  	}
	},
}
