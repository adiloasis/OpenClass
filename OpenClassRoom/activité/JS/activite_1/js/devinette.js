/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme
console.log("Bravo... La solution est :" + solution);
var a = 0;
for(i=0;i<=6;i++){
	if(i<6){
		a = prompt('Entrez une valeure :');
		if(a<solution){
			console.log(a + "  est trop petit");
		}
		if(a>solution){
			console.log(a + "  est trop grand");
		}
		if(a==solution){
			console.log("Bravo... la solution est " + solution);
			break;
		}
	}else{
		console.log("Perdu...la solution est "+solution);
	}

}