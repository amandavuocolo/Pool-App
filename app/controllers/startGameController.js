app.controller('startGameController',['$q', '$scope', 'playerService', '$location', function($q, $scope, playerService, $location){

    $scope.init = function(){
        //objects for players
        $scope.player1 = {};
        $scope.player2 = {};
        //boolean to control choosing players or choosing the winner
        $scope.choosePlayer = true;
        //button text
        $scope.action = 'Confirm Players';

        $scope.getPlayers();
    };

    /*-- gets existing players --*/
    $scope.getPlayers = function(){

        //this function needs promises so that when it's called later, the updated win value displays --*/
        var deferred = $q.defer();

        playerService.getPlayers().then(function(players){
            $scope.players = players;
            deferred.resolve();
        }, function(){
            //handle error
            deferred.reject();
        });

        return deferred.promise;
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
    $scope.toggleButton = function(val){

        if ($scope.action == 'View Leaderboard'){
            $location.path('#!/leaderboard');
        }

        if (val != 'win'){
            //flip choosePlayer boolean
            $scope.choosePlayer = !$scope.choosePlayer;

            if ($scope.choosePlayer){
                $scope.action = 'Confirm Players';
            } else {
                $scope.action = 'Start Over';
            };
        //if param is sent from the chooseWinner function  
        } else {
            $scope.action = 'View Leaderboard';
        }

        
    };

    /*-- choose winner --*/
    /*-- call player service to add a win to that player's record --*.
    /*-- route user to leaderboard --*/
    $scope.chooseWinner = function(winner){

        //use this variable to hide loser
        $scope.winner = angular.copy(winner);    

        playerService.addWinner(winner).then(function(){
            $scope.getPlayers().then(function(){
                //update local winner object
                $scope.winner.wins++;
                $scope.toggleButton('win');
            }, function(){
                //handle error
            });
        }, function(){
            //handle error
        });
    };

    $scope.init();

}]);