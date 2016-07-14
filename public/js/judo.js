angular.module('olympicApp').controller('JudoController', function($scope, $http){

  //console.log("Judo Call");
  $http.get('/olympics/judo').then(function(response){
    $scope.randoJudo = response.data[Math.floor(Math.random()*response.data.length)];
     //console.log(randoJudo);

  })
});
