app.controller('startGameController',['$scope', 'playerService', function($scope, playerService){

    //objects for players
    $scope.player1 = {};
    $scope.player2 = {};
    //boolean to control choosing players or choosing the winner
    $scope.choosePlayer = true;
    //button text
    $scope.action = 'Confirm Players';
    //boolean to contol

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

    /*-- build player two option list --*/
    $scope.getPlayerTwoOptions = function(){
        //make new array for player two options
        $scope.player2Options = angular.copy($scope.players);
        //loop backwards and splice out player 1
        // for (var i=$scope.player2Options.length; i>0; i--){
        for (i=0; i<$scope.player2Options.length; i++){
            if ($scope.players[i].name == $scope.player1.name){
                $scope.player2Options.splice(i, 1);
            };
        };
    };

    //toggles between editing and not editing
    $scope.toggleButton = function(){
        //flip choosePlayer boolean
        $scope.choosePlayer = !$scope.choosePlayer;

        if ($scope.choosePlayer){
            $scope.action = 'Confirm Players';
        } else {
            $scope.action = 'Start Over';
        };
    };

    /*-- choose winner --*/
    /*-- call player service to add a win to that player's record --*.
    /*-- route user to leaderboard --*/
    $scope.choosePlayer = function(winner){
        PlayerService.addWinner(winner).then(function(){
            
        }, function(){
            //handle error
        });
    };

    $scope.init();

}]);