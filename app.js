  angular
    .module('App', ['ngRoute'])
    .config(['$routeProvider',
        function ($routeProvider) {
          $routeProvider
            .when('/user', {
              templateUrl: '/views/user.html',
              controller: 'UserEvents'
            })
            .when('/received', {
                templateUrl: '/views/received.html',
                controller: 'ReceivedEvents'
            })
            .otherwise({
              redirectTo: '/user'
            });
        }
    ]);