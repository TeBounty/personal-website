'use strict';

angular.module('CvShow').controller("experiencesCtrl", function ($scope, $route) {
    $scope.$route = $route;
    $scope.title = "Expériences";
    $scope.message = "Voici mes expériences";
});


