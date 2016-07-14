
angular.module('olympicApp').controller('BadmintonController', function($scope, $http){
  $http.get('/olympics/badminton').then(function(response){
    $scope.randoBadminton = response.data[Math.floor(Math.random()*response.data.length)];
    // console.log(randoBadminton);
  })
});
