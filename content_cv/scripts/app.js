'use strict';

/**
 * Déclaration de l'application routeApp
 */
var CvShow = angular.module('CvShow',[
    // Dépendance du module
    'ngRoute'
]);

    CvShow.config(['$routeProvider',
    function($routeProvider) { 
        // Système de routage
        $routeProvider
        .when('/accueil', {
            templateUrl: 'views/accueil.html',
            controller: 'accueilCtrl',
            activetab: 'accueil'
        })
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'homeCtrl',
            activetab: 'home'
        })
        .when('/competences', {
            templateUrl: 'views/competences.html',
            controller: 'competencesCtrl',
            activetab: 'competences'
        })
        .when('/experiences', {
            templateUrl: 'views/experiences.html',
            controller: 'experiencesCtrl',
            activetab: 'experiences'
        })
        .when('/formations', {
            templateUrl: 'views/formations.html',
            controller: 'formationsCtrl',
            activetab: 'formations'
        })
        .when('/loisirs', {
            templateUrl: 'views/loisirs.html',
            controller: 'loisirsCtrl',
            activetab: 'loisirs'
        })
        .otherwise({
            redirectTo: '/accueil', activetab: "accueil"
        });
    }
]);


