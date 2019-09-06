/*function lanceurDeDes(){

//DECLARATION VAR BOUTONS DIFFTS DES
var deuxFaces = document.getElementById("deux");
var quatreFaces = document.getElementById("quatre");
var sixFaces = document.getElementById("six");
var huitFaces = document.getElementById("huit");
var dixFaces = document.getElementById("dix");
var douzeFaces = document.getElementById("douze");
var vingtFaces = document.getElementById("vingt");
var centFaces = document.getElementById("cent");

//NB DES
var nbDesDeux = document.getElementById("deuxNbLances").value;
parseInt(nbDesDeux);

var nbDesQuatre = document.getElementById("quatreNbLances").value;
parseInt(nbDesQuatre);

var nbDesSix = document.getElementById("sixNbLances").value;
parseInt(nbDesSix);

var nbDesHuit = document.getElementById("huitNbLances").value;
parseInt(nbDesHuit);

var nbDesDix = document.getElementById("dixNbLances").value;
parseInt(nbDesDix);

var nbDesDouze = document.getElementById("douzeNbLances").value;
parseInt(nbDesDouze);

var nbDesVingt = document.getElementById("vingtNbLances").value;
parseInt(nbDesVingt);

var nbDesCent = document.getElementById("centNbLances").value;
parseInt(nbDesCent);

//DECLARATION VAR BOUTON LANCER
var Lancer = document.getElementById("boutonLancer");

function entierAleatoire(min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}
function getRollsDeux(nbDesDeux) {
	    var resultatDeux = [];
	    for (var i = 0; i < nbDesDeux; i++) {
	        resultatDeux.push(entierAleatoire(1, 2));
	    }
	    alert(resultatDeux);
	    return resultatDeux;
	}

function getRollsQuatre(nbDesQuatre) {
	    var resultatQuatre = [];
	    for (var i = 0; i < nbDesQuatre; i++) {
	        resultatQuatre.push(entierAleatoire(1, 4));
	    }
	    alert(resultatQuatre);
	    return resultatQuatre;
	}

function getRollsSix(nbDesSix) {
	    var resultatSix = [];
	    for (var i = 0; i < nbDesSix; i++) {
	        resultatSix.push(entierAleatoire(1, 6));
	    }
	    alert(resultatSix);
	    return resultatSix;
	}

function getRollsHuit(nbDesHuit) {
	    var resultatHuit = [];
	    for (var i = 0; i < nbDesHuit; i++) {
	        resultatHuit.push(entierAleatoire(1, 8));
	    }
	    alert(resultatHuit);
	    return resultatHuit;
	}

function getRollsDix(nbDesDix) {
	    var resultatDix = [];
	    for (var i = 0; i < nbDesDix; i++) {
	        resultatDix.push(entierAleatoire(1, 10));
	    }
	    alert(resultatDix);
	    return resultatDix;
	}

function getRollsDouze(nbDesDouze) {
	    var resultatDouze = [];
	    for (var i = 0; i < nbDesDouze; i++) {
	        resultatDouze.push(entierAleatoire(1, 12));
	    }
	    alert(resultatDouze);
	    return resultatDouze;
	}

function getRollsVingt(nbDesVingt) {
	    var resultatVingt = [];
	    for (var i = 0; i < nbDesVingt; i++) {
	        resultatVingt.push(entierAleatoire(1, 20));
	    }
	    alert(resultatVingt);
	    return resultatVingt;
	}

function getRollsCent(nbDesCent) {
	    var resultatCent = [];
	    for (var i = 0; i < nbDesCent; i++) {
	        resultatCent.push(entierAleatoire(1, 100));
	    }
	    alert(resultatCent);
	    return resultatCent;
	}

Lancer.addEventListener("click", function(){
	console.log('clicked');
	getRollsDeux(nbDesDeux);
	getRollsQuatre(nbDesQuatre);
	getRollsSix(nbDesSix);
	getRollsHuit(nbDesHuit);
	getRollsDix(nbDesDix);
	getRollsDouze(nbDesDouze);
	getRollsVingt(nbDesVingt);
	getRollsCent(nbDesCent);
});

}*/

$(document).ready(function(){
	lanceurDeDes();
});
function lanceurDeDes(){

//DECLARATION VAR BOUTONS DIFFTS DES
var deuxFaces = document.getElementById("deux");
var quatreFaces = document.getElementById("quatre");
var sixFaces = document.getElementById("six");
var huitFaces = document.getElementById("huit");
var dixFaces = document.getElementById("dix");
var douzeFaces = document.getElementById("douze");
var vingtFaces = document.getElementById("vingt");
var centFaces = document.getElementById("cent");

//DECLARATION VAR H1 REPONSE
var h1reponse = document.getElementById("h1reponse");

//NB DES
var nbDesDeux = 0;
function getValueDice(){

nbDesDeux = document.getElementById("deuxNbLances").value;
parseInt(nbDesDeux);

var nbDesQuatre = document.getElementById("quatreNbLances").value;
parseInt(nbDesQuatre);

var nbDesSix = document.getElementById("sixNbLances").value;
parseInt(nbDesSix);

var nbDesHuit = document.getElementById("huitNbLances").value;
parseInt(nbDesHuit);

var nbDesDix = document.getElementById("dixNbLances").value;
parseInt(nbDesDix);

var nbDesDouze = document.getElementById("douzeNbLances").value;
parseInt(nbDesDouze);

var nbDesVingt = document.getElementById("vingtNbLances").value;
parseInt(nbDesVingt);

var nbDesCent = document.getElementById("centNbLances").value;
parseInt(nbDesCent);

}
//DECLARATION VAR BOUTON LANCER
var Lancer = document.getElementById("boutonLancer");

function entierAleatoire(min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}
function getRolls(nbDes) {
	    var resultat = [];
	    for (var i = 0; i < nbDes; i++) {
	        resultat.push(entierAleatoire(1, 2));
	    }
	    alert(resultat);
	    return resultat;
	}
Lancer.addEventListener("click", function(){
	getValueDice();
	getRolls(nbDesDeux);	
});

}