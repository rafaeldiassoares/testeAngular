'use strict';

var app = angular.module('sysApp', ['ngRoute', 'ngResource', 'directives']);

app.config(function($routeProvider){
    $routeProvider
        .when('/', {        
            controller: 'InicioCtrl',
            templateUrl: '/templates/inicio.html'
        })
        .when('/dashboard', {        
            controller: 'DashboardCtrl',
            templateUrl: '/templates/dashboard.html'
        })
        .when('/charts', {        
            controller: 'ChartsCtrl',
            templateUrl: '/templates/charts.html'
        })
        .when('/buttons', {        
            controller: 'ButtonsCtrl',
            templateUrl: '/templates/buttons.html'
        })
        .otherwise({
            redirectTo: '/'
        }) ;
});