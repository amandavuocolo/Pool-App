'use strict';


var app = angular.module("poolApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/home.html"
    })
    // .when("/home", {
    //     templateUrl : "views/home.html",
    //     controller: "homeController"
    // })
    .when("/new-player", {
        templateUrl : "views/new-player.html",
        controller: "newPlayerController"
    })
    .when("/start-game", {
        templateUrl : "views/start-game.html",
        controller: "startGameController"
    })
    .when("/leaderboard", {
        templateUrl : "views/leaderboard.html",
        controller: "leaderboardController"
    })
});