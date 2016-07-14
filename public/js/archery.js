angular.module('olympicApp').controller('ArcheryController', function($scope, $http){
  $http.get('/olympics/archery').then(function(response){
    $scope.randoArchery = response.data[Math.floor(Math.random()*response.data.length)];
    // console.log(randoArchery);
  })
});
