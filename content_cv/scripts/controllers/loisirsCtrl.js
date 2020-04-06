'use strict';

angular.module('CvShow').controller("loisirsCtrl", function ($scope, $route) {
    $scope.$route = $route;
    $scope.title = "Loisirs";
    $scope.message = "Voici mes loisirs";
});

