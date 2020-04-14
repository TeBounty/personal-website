'use strict';

angular.module('CvShow').controller("profilCtrl", function ($scope, $route) {
    $scope.$route = $route;
    $scope.title = "Chloé GARDENAT";
    $scope.soustitle = "Développeuse Web Logiciel";
    $scope.message = "J'ai un titre Bac+2 et je veux poursuivre mes études dans le but de devenir concepteur développeur. Je suis donc à la recherche d'une alternance pour poursuivre ce but. J'aimerais à travers ce parcours perfectionner mes compétences actuelles au sein d'une équipe et partager mon savoir. Pâtissière de formation, j’ai choisi de me reconvertir dans le domaine du développement web et mobile pour des raisons de santé (je suis bénéficiaire d’une RQTH), mais également pour mon grand intérêt dans l’informatique : jeux, montage d’un PC. La création aussi d’un site internet via un CMS m’a permis d’en connaître ses limites : cela m’a motivée à me former dans le développement.";
});
