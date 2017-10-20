/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme
var contact = {

	init: function(prenom,nom){
		this.prenom = prenom;
		this.nom = nom;
	} 

	
};



var c1 = Object.create(contact);
c1.init("Carole","Lévisse");
var c2 = Object.create(contact);
c2.init("Mélodie","Nelsonne");

var contacts = [];
contacts.push(c1);
contacts.push(c2);

function liste(){
	console.log("Voici la liste de tous vos contacts :");
	for(i=0;i<contacts.length;i++){
		console.log("Nom : "+contacts[i].nom+",  Prénom :"+contacts[i].prenom);
	}
	console.log("");
}
function accueil(){

	console.log("1 : Liste des contacts");
	console.log("2 : Ajouter un contact!");
	console.log("0 : Quitter");
}
console.log("Bienvenue dans le gestionnaire de contacts !");
var Q = 1;
while(Q==1){
	accueil();
	var a = 0;
	a = prompt("choisissez une option : ");
	if(a==1){
		liste();
	}
	if(a==2){
		var nom = prompt("Entrez le nom du contact : ");
		var prenom = prompt("Entrez le prénom du contact : ");
		var c3 = Object.create(contact);
		c3.init(prenom,nom);
		contacts.push(c3);
		console.log("Le nouveau contact a été ajouté")
		console.log("");
	}	
	if (a==0){
		Q = 2;
		console.log("Aurevoire !");
	}
}
