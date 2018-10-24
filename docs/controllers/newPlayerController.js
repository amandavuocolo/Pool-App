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
        //check for duplicate
        for (i=0; i<$scope.players.length; i++){
            if ($scope.players[i].name == $scope.newPlayer.name){
                //turn on error message
                $scope.showError = true;
                //show error message for 2.5 seconds
                $timeout( function(){
                    $scope.showError = false;
                }, 2500 );
            }
        }

        //if there is no duplicate, add player
        if(!$scope.showError){
            playerService.addPlayer($scope.newPlayer).then(function(){
                //reset form
                $scope.newPlayer = [];
                //reload list
                $scope.getPlayers();
            }, function(){
                //handle error
            });
        }
    };

    $scope.init();

}]);