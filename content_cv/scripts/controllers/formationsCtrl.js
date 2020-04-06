'use strict';

angular.module('CvShow').controller("formationsCtrl", function ($scope, $route) {
    $scope.$route = $route;
    $scope.title = "Formations";
    $scope.message = "Voici mes formations";
});


