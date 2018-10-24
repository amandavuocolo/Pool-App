app.controller('newPlayerController',['$scope', 'playerService', '$timeout',
    function($scope, playerService, $timeout){

    /*-- newPlayer object (holds ng-model data) --*/
    $scope.newPlayer = {};
    /*-- boolean for error message --*/
    $scope.showError = false;

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
        //chech for duplicate
        for (i=0; i<$scope.players.length; i++){
            console.log($scope.players[i].name)
            if ($scope.players[i].name == $scope.newPlayer.name){
                console.log('MATCH')
                $scope.showError = true;
                //show error for four seconds
                $timeout( function(){
                    $scope.showError = false;
                }, 2500 );
            }
        }

        if(!$scope.showError){
            playerService.addPlayer($scope.newPlayer).then(function(){
                $scope.newPlayer = [];
                $scope.getPlayers();
            }, function(){
                //handle error
            });
        }
    };

    $scope.init();

}]);