app.service('playerService', function($q){
    
    var self = this;

    /*-- some sample data to start --*/
    self.players = [
        {
            name: 'Andrew',
            wins: 5,
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
            name: 'Andrew',
            wins: 4,
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

    /*-- add player to players object --*/
    self.addPlayer = function(player){
        var deferred = $q.defer();

        player.ctime = Date.now();
        self.players.push(player);

        deferred.resolve(self.players);

        return deferred.promise;
    }

 });