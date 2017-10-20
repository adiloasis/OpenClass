var Reservation = {
	init : function(){
		var _this = this;

		if(this.isResaActiv()){

			$(".footer").css('display','block');

			// si resaActiv on enregistres les variables
			var date1 = localStorage.getItem("heure");
			var stationRes = localStorage.getItem("station");
			var adresseRes = localStorage.getItem("adresse");			
			var dateActu = new Date();
			var diff = this.dateDiff(date1,dateActu.getTime());

			$("#nomStation").text("Un vélo a été reservé");
			$("#stationRes").text(stationRes);
			$("#adresseRes").text(adresseRes);

			if (diff.min>=1){
				localStorage.clear();
				//  FOOOTER change en fin de reservation
			}

		}else{
			$("#info").css('display','block');
		}


		$( ".reserver" ).click(function() {

			$("#signature").css('display','flex');
			$("#resa").css('display','none');
			$("#signature").css('display','block');
			
		});
		//_____________________ a chaque click  verifier la resa !_____________________

		$( ".signature" ).click(function() {
			$("#signature").css('display','none');
			$(".footer").css('display','block');
			var date = new Date();
			var station = $("#nomStation").html();
			var adresse = $("#adresse").html();
			_this.storage(station,adresse,date);
			_this.init();
			//setIntervalle  tant que reservation en cours
		});
		$(".annuler").click(function() {
            _this.annuler();
            $(".footer").css('display','none');
            $("#resa").css('display','block');
            _this.init();

        });
	},

	isResaActiv : function(){
		if(localStorage.getItem("station")){
			return true;
		}
		return false;	
	},



	storage : function(nom,adresse,heure){
		localStorage.setItem("station",nom);
		localStorage.setItem("adresse",adresse);
  		localStorage.setItem("heure",heure.getTime());
	},

	dateDiff : function(date1,date2){
	    var diff = {}                           // Initialisation du retour
	    var tmp = date2 - date1;
	 	
	    tmp = Math.floor(tmp/1000);             // Nombre de secondes entre les 2 dates
	    diff.sec = tmp % 60;                    // Extraction du nombre de secondes
	 
	    tmp = Math.floor((tmp-diff.sec)/60);    // Nombre de minutes (partie entière)
	    diff.min = tmp % 60;                    // Extraction du nombre de minutes
	 
	    tmp = Math.floor((tmp-diff.min)/60);    // Nombre d'heures (entières)
	    diff.hour = tmp % 24;                   // Extraction du nombre d'heures
	     
	    tmp = Math.floor((tmp-diff.hour)/24);   // Nombre de jours restants
	    diff.day = tmp;
	     
	    return diff;
	},

    annuler: function(){
        localStorage.clear();
        console.log('annuler');
    },
}