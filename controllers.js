angular
    .module('App')
    .controller('UserEvents',  function($scope, GithubService){
      $scope.events = null, $scope.message = null;
      $scope.$watch('username', function(newUsername){
          if(newUsername){
              GithubService.event(newUsername).success(function(data, status){
                   if(data.data.length > 0){
                      $scope.events = data.data;
                      $scope.message = null;
                  } else {
                      $scope.events = null;
                      $scope.message = data.data.message;
                  }
              });
          }
      });
        
    })
    .controller('ReceivedEvents',  function($scope, GithubService){
        $scope.events = null, $scope.message = null;
        $scope.$watch('username', function(newUsername){
            if(newUsername){
                GithubService.received(newUsername).success(function(data, status){
                    if(data.data.length > 0){
                        $scope.events = data.data;
                        $scope.message = null;
                    } else {

                        $scope.events = null;
                        $scope.message = data.data.message;
                    }
                });
            }
        });
        
    });
