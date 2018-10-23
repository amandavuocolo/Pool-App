app.service('playerService', function($q){
    
    var self = this;

    /*-- some sample data to start --*/
    self.players = [
        {
            name: 'Andrew',
            wins: 5
        }, {
            name: 'Nick',
            wins: 1,
        }, {
            name: 'Sophia',
            wins: 3
        }, {
            name: 'Sydney',
            wins: 1
        }, {
            name: 'Andrew',
            wins: 4
        }
    ];


    /*-- get player list --*/
    self.getPlayers = function(){
        
        var deferred = $q.defer();

        
        deferred.resolve(self.players);

        return deferred.promise;
    };

    self.addPlayer = function(player){
        var deferred = $q.defer();

        self.players.push(player);

        deferred.resolve(self.players);

        return deferred.promise;
    }

 });