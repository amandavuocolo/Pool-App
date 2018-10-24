app.controller('leaderboardController',['$scope', '$q', 'playerService', function($scope, $q, playerService){

    $scope.init = function(){
        $scope.getPlayersAndLeader();
    };

    /*-- gets existing players --*/
    $scope.getPlayersAndLeader = function(){

        var deferred = $q.defer();

        playerService.getPlayers().then(function(players){
           
            //set leaders object
            $scope.leaders = [];

            //copy players so that the base object is preserved
            var tempPlayers = angular.copy(players);

            //sort temp player object by most to least wins
            tempPlayers.sort(function (a,b){ 
                return b.wins - a.wins;
            });

            //store highest win count
            $scope.highScore = tempPlayers[0].wins;
           
            //loop through players to see if there is a tie for first
            for (i=tempPlayers.length - 1; i>=0; i--){
                if (tempPlayers[i].wins == $scope.highScore){
                    //if a player's wins match the highest score, push it into the leader object and remove it from the temp array
                    $scope.leaders.push(tempPlayers[i]);
                    tempPlayers.splice(i, 1);
;                }
            }
            
            $scope.players = angular.copy(tempPlayers);
            
            deferred.resolve();
        }, function(){
            //handle error
            deferred.reject();
        });

        return deferred.promise;
    };

    $scope.init();

}]);