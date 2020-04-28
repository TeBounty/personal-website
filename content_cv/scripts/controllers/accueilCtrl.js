'use strict';

angular.module('CvShow').controller("accueilCtrl", function ($scope) {
    $scope.nomPrenom = "Chloé GARDENAT";
    $scope.metier = "Développeuse Web/Logiciel";
    $scope.mail = "chloegardenat@live.fr";
    $scope.numero = "06 23 37 85 46";

    $scope.contentRechercher = "Je suis à la recherche d'une entreprise à l'écoute, qui souhaite m'accompagner dans mon évolution. Afin que je lui en apporte davantage que ce qu'il m'apporte.";
    $scope.contentAimer = "De nature curieuse, j'aime toucher à tout. J'ai tout de même des loisirs particulier auquel je m'attache plus que d'autres.";
    $scope.contentSavoir = "Je ne m'intéresse pas à un langage en particulier, j'essaye d'augmenter ma capacité à programmer. A savoir m'adapter à tout.";
    $scope.contentEtre = "Très organisée et minutieuse c'est des qualités que j'ai gardé de mon ancien métier.";

});