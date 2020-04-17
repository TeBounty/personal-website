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
            placementDivInfo.style.top = (positions.clientY + 100) + 'px';
            placementDivInfo.style.display = "block";

            // element.classList.add("activeItemE");

        });
    }

});

// Récupérer les coordonnées des boutons
function recupererPositionBouton(a) {
    var b = a.getBoundingClientRect();
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
            information = "<p>" + "Bonjour" +"<p/>"
            divInfo.innerHTML = information;
            break;
        case 'deuxiemeExp':
            information = 'Pom';
            divInfo.innerHTML = information;
            break;
        case 'troisiemeExp':
            information = 'Prout';
            divInfo.innerHTML = information;
            break;
        case 'quatriemeExp':
            information = 'Texte';
            divInfo.innerHTML = information;
            break;
        case 'cinquiemeExp':
            information = 'Luciole';
            divInfo.innerHTML = information;
            break;
        case 'sixiemeExp':
            information = 'Tomate';
            divInfo.innerHTML = information;
            break;
    }
}

// Ferme la div si on clique sur la croix
function closeDiv() {
    document.querySelector("#plusInfo").style.display = "none";

    // element.classList.remove("activeItemE");
}