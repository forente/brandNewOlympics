angular.module('olympicApp').controller('DivingController', function($scope, $http){
  $http.get('/olympics/diving').then(function(response){
    $scope.randoDiving = response.data[Math.floor(Math.random()*response.data.length)];
    // console.log(randoDiving);
  })
});
