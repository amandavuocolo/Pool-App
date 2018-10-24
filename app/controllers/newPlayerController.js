app.controller('newPlayerController',['$scope', 'playerService', 
    function($scope, playerService){

    /*-- newPlayer object (holds ng-model data) --*/
    $scope.newPlayer = {};

    $scope.init = function(){
        $scope.getPlayers();
    };

    /*-- gets existing players --*/
    $scope.getPlayers = function(){
        playerService.getPlayers().then(function(players){
            $scope.players = players;
        }, function(){
            //handle error
        });
    };

    /*-- adds new player --*/
    $scope.addPlayer = function(){
        playerService.addPlayer($scope.newPlayer).then(function(){
            $scope.newPlayer = [];
            $scope.getPlayers();
        }, function(){
            //handle error
        });
    };

    $scope.init();

}]);