angular
    .module('App')
    .factory('GithubService',  function($http){
        var getUserEvents = function(username) {
            return $http({
                method: 'JSONP',
                url: 'https://api.github.com/users/'+username+'/events/public?callback=JSON_CALLBACK'
            })
        };
        var getUserRecvEvents = function(username) {
            return $http({
                method: 'JSONP',
                url: 'https://api.github.com/users/'+username+'/received_events/public?callback=JSON_CALLBACK'
            })
        };
        return {
            event: function(username){
                return getUserEvents(username);
            },
            received: function(username) {
                return getUserRecvEvents(username);
            }
        }
       
    });
