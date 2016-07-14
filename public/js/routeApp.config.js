
angular.module('olympicApp').config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/judo', {
    templateUrl: 'views/judo.html',
    controller: 'JudoController'
  })
  .when('/badminton', {
    templateUrl: 'views/badminton.html',
    controller: 'BadmintonController'
  })
  .when('/diving', {
    templateUrl: 'views/diving.html',
    controller: 'DivingController'
  })
  .when('/archery', {
    templateUrl: 'views/archery.html',
    controller: 'ArcheryController'
  })
  .when('/tableTennis', {
    templateUrl: 'views/tableTennis.html',
    controller: 'TableTennisController'
  })
  $locationProvider.html5Mode(true);
});
