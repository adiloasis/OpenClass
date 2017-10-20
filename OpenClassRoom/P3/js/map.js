var Gmap = {
	map : false,
	init : function(){
		this.initMap();
		ajaxGet("https://api.jcdecaux.com/vls/v1/stations?contract=Paris&apiKey=d502b6fdad1dc155d15a337dddf2bd952a4c1c97",this.constructList);
	},

	constructList : function(listeJSON){
	    var curseurs = JSON.parse(listeJSON);
	    var number = 0;
	    var _this = this;
	    for(i=0;i<curseurs.length;i++){   
	        var marker = new google.maps.Marker({
			  position: {lat: curseurs[i].position.lat , lng: curseurs[i].position.lng },
			  map: map,
			  id : i,

			});

			marker.addListener('click', function() {
				$("#signature").css('display','none');
				$("#resa").css('display','block');
	 			$("#nomStation").text(curseurs[this.id].name);
	 			$("#adresse").text(curseurs[this.id].address);
	 			$("#veloLibre").text("Places Libres : " + curseurs[this.id].available_bike_stands);
	 			$("#veloOccup").text("Velos Libres : " + curseurs[this.id].available_bikes);
	 			
	 			var res = Object.create(Reservation);

	 			if(curseurs[this.id].available_bikes>0 && !res.isResaActiv()){
	 				$(".reserver").css('display','block');
	 			}else{
	 				$(".reserver").css('display','none');
	 			}

			});
	    }
	    // var markerCluster = new MarkerClusterer(map, markers,
	    //         {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
	    // }
	},

	initMap : function() {
		var paris = {lat: 48.856614, lng: 2.352222};
		map = new google.maps.Map(document.getElementById('map'), {
		  zoom: 12,
		  center: paris
		});
	},

	addStation : function(arg){
		console.log(arg);
	}

}