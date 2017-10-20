/* 
Activité 1
*/

ajaxGet(" https://oc-jswebsrv.herokuapp.com/api/liens ",constructList);



// TODO : compléter ce fichier pour ajouter les liens à la page web
var bouton = document.getElementsByName("ajouter");
function ajouter(){
    var title = document.getElementsByName("titre")[0].value;
    var autor = document.getElementsByName("auteur")[0].value;
    var url = document.getElementsByName("lien")[0].value;
    if(title!="" && autor!="" && url!=""){
        add(title,autor,url);
        document.getElementsByName("titre")[0].value = "";
        document.getElementsByName("auteur")[0].value = "";
        document.getElementsByName("lien")[0].value = "";
        afficher(2);
    }
    


}
function afficher(arg){
    var disp = "inline";
    var bout = "none";
    var req = true;
    if(arg==2){
        disp = "none";
        // req = false;
        bout = "block";
    }
    var champs = document.getElementsByClassName("cache");
    for (var i = 0; i < champs.length; i++) {
        champs[i].style.display = disp;
        champs[i].required = req; 
    }
    bouton[0].style.display = bout;

}

var tab = document.createElement("ul");

tab.style.paddingLeft = 0;


function add(paraTitre,paraAuteur,paraUrl){
    var lien = document.createElement("li");
    lien.style.listStyle = "none";
    lien.classList.add("lien");
    var titre = document.createElement("b");
    titre.style.color = "#428bca";
    titre.innerHTML += paraTitre;
    lien.appendChild(titre);
    lien.innerHTML += " "+paraUrl;
    lien.innerHTML += "<p> Ajouté par "+paraAuteur+"</p>";
    tab.appendChild(lien);
}



function constructList(listeJSON){
    var listeLiens = JSON.parse(listeJSON);
    for(i=0;i<listeLiens.length;i++){   
        add(listeLiens[i].titre,listeLiens[i].auteur,listeLiens[i].url);
    }

    document.getElementById("contenu").appendChild(tab);
}

var form = document.querySelector("form");
// Gestion de la soumission du formulaire
form.addEventListener("submit", function (e) {
    e.preventDefault();
    // Récupération des champs du formulaire dans l'objet FormData
    var data = {
         "titre" : $("#titre").val(),

         "url" : $("#url").val(),

         "auteur" :$("#auteur").val()
    };
    
    var dataJSON = JSON.stringify(data);
    console.log(dataJSON);

    // Envoi des données du formulaire au serveur
    // La fonction callback est ici vide
    ajaxPost("https://oc-jswebsrv.herokuapp.com/api/lien", data,
        function (reponse) {
            // Le film est affiché dans la console en cas de succès
            console.log("LIEN BIEN AJOUTé");
        },
        true // Valeur du paramètre isJson
    );
});
