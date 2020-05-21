'use strict';

angular.module('CvShow').controller("accueilCtrl", function ($scope) {
    $scope.nomPrenom = "Chloé GARDENAT";
    $scope.metier = "Développeuse Web/Logiciel";
    $scope.mail = "chloegardenat@live.fr";
    $scope.numero = "06 23 37 85 46";

    $scope.contentRechercher = "Je suis à la recherche d'une alternance pour le cursus Concepteur Développeur au sein d'une entreprise qui pourra m'accompagner dans mon évolution.";
    $scope.contentAimer = "De nature curieuse, j'aime aller à la rencontre de nouvelles connaissances. Mes loisirs sont le dessin et les jeux vidéos, qui m'ont initiés à l'univers de l'informatique depuis mon adolescence.";
    $scope.contentSavoir = "Durant mon parcours je me suis intérressée à divers langage de programmation. Mon objectif étant de pouvoir être polyvalente et de m'adapter aux différentes missions qui pourront m'être confiées.";
    $scope.contentEtre = "Mon parcours professionnel m'a permis de développer des qualités telles que l'organisation, le travail d'équipe et la minutie. ";

});



