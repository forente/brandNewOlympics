angular.module('olympicApp').controller('TableTennisController', function($scope, $http){
  $http.get('/olympics/tableTennis').then(function(response){
    $scope.randoTableTennis = response.data[Math.floor(Math.random()*response.data.length)];
    })
});
