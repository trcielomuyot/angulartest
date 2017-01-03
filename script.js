// script.js

    // create the module and name it scotchApp
    var app = angular.module('basicCMS', []);

    // create the controller and inject Angular's $scope
    app.controller('mainController', function($scope) {
    	$scope.firstname = "Stranger";
    });
