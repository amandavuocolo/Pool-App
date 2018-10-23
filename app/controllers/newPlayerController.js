app.controller('newPlayerController',['$scope', 'playerService', 
    function($scope, playerService){

    $scope.newPlayer = {};

    $scope.init = function(){
        $scope.getPlayers();
    };

    $scope.getPlayers = function(){
        playerService.getPlayers().then(function(players){
            $scope.players = players;
            console.log($scope.players)
        }, function(){
            //handle error
        })
    }

    $scope.addPlayer = function(){

        /*-- by default new players will have zero wins --*/
        $scope.newPlayer.wins = 0;

        playerService.addPlayer($scope.newPlayer).then(function(){
            $scope.newPlayer = [];
            $scope.getPlayers();
        }, function(){
            //handle error
        })
    }

    $scope.init();

}]);