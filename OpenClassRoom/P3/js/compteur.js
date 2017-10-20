var countdownManager = {
    // Configuration
    // targetTime: localStorage.getItem("heure"), // Date cible du compte à rebours (00:00:00)
    displayElement: { // Elements HTML où sont affichés les informations
        day:  null,
        hour: null,
        min:  null,
        sec:  null
    },
     
    // Initialisation du compte à rebours (à appeler 1 fois au chargement de la page)
    init: function(){
        _this = this;
        // Récupération des références vers les éléments pour l'affichage
        // La référence n'est récupérée qu'une seule fois à l'initialisation pour optimiser les performances
        // this.displayElement.day  = jQuery('#countdown_day');
        // this.displayElement.hour = jQuery('#countdown_hour');
        this.displayElement.min  = jQuery('#countdown_min');
        this.displayElement.sec  = jQuery('#countdown_sec');
 
        // Lancement du compte à rebours
        this.tick(); // Premier tick tout de suite
        window.setInterval("countdownManager.tick();", 1000); // Ticks suivant, répété toutes les secondes (1000 ms)
    },
     
    // Met à jour le compte à rebours (tic d'horloge)
    tick: function(){
        // Instant présent
        var timeNow  = new Date();
        var targetTime = localStorage.getItem("heure");
        // On s'assure que le temps restant ne soit jamais négatif (ce qui est le cas dans le futur de targetTime)
        

        
        // Calcul du temps restant
        if(targetTime != null){
            var diff = this.dateDiff(new Date(), targetTime);
            // console.log("diff min " + diff.min + diff.sec);
            if (diff.min>=1){
                localStorage.clear();
                //  FOOOTER change en fin de reservation
            }
            console.log("local " + targetTime);
             this.displayElement.min.text(  19 + diff.min  );
             this.displayElement.sec.text(  60 + diff.sec  );
        }else{
            console.log(" date negative");
        }
        // this.displayElement.day.text(  diff.day  );
        // this.displayElement.hour.text( diff.hour );

    },
     
    // Calcul la différence entre 2 dates, en jour/heure/minute/seconde
    dateDiff: function(date1, date2){
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


};