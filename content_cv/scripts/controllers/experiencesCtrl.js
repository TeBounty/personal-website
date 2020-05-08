'use strict';

angular.module('CvShow').controller("experiencesCtrl", function($scope, $route) {
    $scope.$route = $route;
    $scope.title = "Expériences";
    $scope.message = "Voici mes expériences";

    var elements = document.querySelectorAll('#contentExp div div');

    for (const element of elements) {
        element.addEventListener("click", function() {

            var positions = recupererPositionBouton(element);

            // Placer la div d'info en fonction de la position de la div cliquer
            var placementDivInfo = document.querySelector("#plusInfo");
            placementDivInfo.style.left = positions.clientX + 'px';
            placementDivInfo.style.top = (positions.clientY + 150) + 'px';
            placementDivInfo.style.display = "block";

        });
    }
});

// Récupérer les coordonnées des boutons
function recupererPositionBouton(a) {
    var b = a.getBoundingClientRect();
    console.log(a);
    return {
        clientX: a.offsetLeft,
        clientY: a.offsetTop
    }
}

// Mettre à jour le texte de la div information en fonction du bouton cliquer
function changeContenuDivInfo(id) {
    var information = "";
    var divInfo = document.querySelector("#plusInfo div");

    switch (id) {
        case 'premierExp':
            information = "<span>" + "Conception d'une nouvelle fonctionnalité dans le portail interne :" + "</span>" +
            "<ul>" + 
            "<li>Développement du front-end (html, css, javascript)</li>" + 
            "<li>Développement du back-end (C#, base de données, procédure stockée)</li>" +
            "</ul>"
            divInfo.innerHTML = information;
            break;
        case 'deuxiemeExp':
            information = "<span>" + "Programmation d'un parcours sur le logiciel de l'AAGV (Autonomous Guided Vehicles) :" + "</span>" +
            "<ul>" + 
            "<li>Automatiser la visite de l'usine par l'AAGV</li>" + 
            "<li>Utilisation du logiciel de l'AAGV</li>" +
            "</ul>"
            divInfo.innerHTML = information;
            break;
        case 'troisiemeExp':
            information = "<span>" + "Etude d'un code source d'une application mobile de géolocalisation :" + "</span>" +
            "<ul>" + 
            "<li>Mise en place d'un cahier des charges pour l'application</li>" + 
            "<li>Adapter le code source de base aux besoins de l'association</li>" +
            "</ul>"
            divInfo.innerHTML = information;
            break;
        case 'quatriemeExp':
            information = "<span>" + "Modélisation d'une base de données :" + "</span>" +
            "<ul>" + 
            "<li>Découverte du fonctionnement d'une base de donnée</li>" + 
            "<li>Se familiariser avec l'html et le css</li>" +
            "</ul>"
            divInfo.innerHTML = information;
            break;
        case 'cinquiemeExp':
            information = "<span>" + "Accueil de la piscine municipale de Martres-Tolosane :" + "</span>" +
            "<ul>" + 
            "<li>Accueil des clients</li>" +
            "<li>Gestion de la caisse</li>" + 
            "<li>Entretien des locaux et des vestiaires</li>" +
            "</ul>"
            divInfo.innerHTML = information;
            break;
        case 'sixiemeExp':
            information = "<span>" + "Découverte des tâches d'une assistante comptable et de gestion :" + "</span>" +
            "<ul>" + 
            "<li>Mettre à jour les données des comptes clients</li>" + 
            "<li>Apprendre à utiliser Excel</li>" +
            "</ul>"
            divInfo.innerHTML = information;
            break;
    }
}

// Ferme la div si on clique sur la croix
function closeDiv() {
    document.querySelector("#plusInfo").style.display = "none";
}