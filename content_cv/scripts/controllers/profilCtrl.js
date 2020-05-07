'use strict';

angular.module('CvShow').controller("profilCtrl", function ($scope, $route) {
    $scope.$route = $route;
    $scope.title = "Chloé GARDENAT";
    $scope.soustitle = "Développeuse Web Logiciel";
    
    $scope.bp = "Originaire de l'Ile de la Reunion, Boulangère Pâtissière de formation initiale ayant également un CAP Pâtisserie. J'ai dû rejoindre la métropole française pour des raisons de santé.";
    $scope.sante = "En effet, ma pathologie ne me permettant plus d'effectuer un emploi à temps complet et des tâches dites physiques. J'ai dû réfléchir à une reconversion professionnelle. Je suis également bénéficiaire d'une RQTH.";
    $scope.reconversion = "Ma recherche a été une étape longue et compliquée pour moi car cela représentait l'abandon de ma passion pour la pâtisserie. Après la découverte de différent corps de métier à travers différentes formations je découvre le développement web.";
    $scope.dev = "Mettre en place un site web à partir d'un CMS m'a permis d'en connaître les limites et de me permettre de pousser mes connaissances en développement. Je suis maintenant titulaire d'un titre professionnel de développeuse web et mobile.";

});

