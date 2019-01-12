var app=angular.module('clickHotel',['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "app/home/home.html",
            controller: "homeCtrl"
        })
        .when("/login", {
            templateUrl : "app/login/login.html"
        })
        .when("/register", {
            templateUrl : "app/register/register.html"
        })
        .otherwise("/");
});