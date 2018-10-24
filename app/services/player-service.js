app.service('playerService', function($q){
    
    /*-- This service is for the management of player data. It allows users to add new players and keep track of their wins. --*/

    var self = this;

    /*-- some sample data to start --*/
    /*--store name, number of wins, and created date --*/
    self.players = [
        {
            name: 'Andrew',
            wins: 7,
            ctime: Date.now()
        }, {
            name: 'Nick',
            wins: 1,
            ctime: Date.now()
        }, {
            name: 'Sophia',
            wins: 3,
            ctime: Date.now()
        }, {
            name: 'Sydney',
            wins: 1,
            ctime: Date.now()
        }, {
            name: 'Jon',
            wins: 7,
            ctime: Date.now()
        }
    ];


    /*-- get player list --*/
    self.getPlayers = function(){
        
        var deferred = $q.defer();
        
        //return players when called
        deferred.resolve(self.players);

        return deferred.promise;
    };

    /*-- add new player to players object --*/
    self.addPlayer = function(player){
        var deferred = $q.defer();
        
        /*-- by default, new players will have zero wins --*/
        player.wins = 0;
        /*-- ctime (created time) is used to sort the players list on the new player creation view --*/
        player.ctime = Date.now();
        /*-- push new player into playeres object --*/
        self.players.push(player);

        deferred.resolve(self.players);

        return deferred.promise;
    }

    /*-- increment player's wins --*/
    self.addWinner = function(winner){
        var deferred = $q.defer();
        
        for (i=0; i<self.players.length; i++){
            if (self.players[i].name == winner.name){
                self.players[i].wins++;
            };
        };

        deferred.resolve(self.players);

        return deferred.promise;
    }

 });