/*
Activité : gestion des contacts
*/

// Ensemble des messages à afficher à l'utilisateur.
var bienvenu = "Bienvenu sur le gestionnaire de contact";
var bye = "A bientot !";
var listeChoix = "\n1 - Lister les contacts\n2 - Ajouter un contact\n0 - Quitter";
var demandeChoix = "Choisissez une option";
var demandeNom = "Nom du nouveau contact ?";
var demandePrenom = "Prenom du nouveau contact ?";
var contactAjoute = "Le contact a bien été ajouté.";
var introListeContact = "Voici la liste de tous vos contacts.";
var erreurUtilisateur = "Tapez 1, 2 ou 0 !";

// Prototype de l'objet contact, représentant un contact.
var Contact = {
    init: function(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    },

    seDecrire: function() {
        var description = "Nom : " + this.nom + ", Prenom : " + this.prenom;
        return description;
    }
};

// Prototype de l'objet contact manager, représentant un manager de contacts.
var ContactManager = {
    init: function() {
        this.contacts = []; // la liste des contacts.
    },

    ajouter: function(contact) {
        this.contacts.push(contact);
    },

    lister: function() {
        this.contacts.forEach( function(contact) { console.log(contact.seDecrire()); })
    }
}

// Créé les 2 premiers contacts et les ajoute grace au manager.
var contact1 = Object.create(Contact);
contact1.init("Lévisse", "Carole");
var contact2 = Object.create(Contact);
contact2.init("Nelsonne", "Mélodie");
var contactManager = Object.create(ContactManager);
contactManager.init();
contactManager.ajouter(contact1);
contactManager.ajouter(contact2);

// Lancement du programme avec le message de bienvenu.
alert(bienvenu);

// Boucle principale.
var continuer = true;
while(continuer) {
    console.log(listeChoix);
    var choix = prompt(demandeChoix);
    switch (choix) {
        case "1":
            console.log(introListeContact);
            contactManager.lister();
            break;
        case "2":
            // Créé un nouveau contact que le manager ajoute à sa liste.
            var contact = Object.create(Contact);
            contact.init(prompt(demandeNom), prompt(demandePrenom));
            contactManager.ajouter(contact);
            console.log(contactAjoute);
            break;
        case "0":
            continuer = false;
            break;
        default:
            console.log(erreurUtilisateur);
    }
}

// Fin du programme avec message bye bye !
console.log(bye);
