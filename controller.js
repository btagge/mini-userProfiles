angular.module('userProfiles').controller('MainController', function($scope, mainService){
    
    $scope.thisAppIsBroken = "This angular app is working";
    $scope.getUsers = function() {
        mainService.getUsers().then(function(response){
            $scope.users = response.data.data;
        }, function(error){
            console.error(error);
        });
    }
    
    $scope.getUsers();

    $scope.toggleFavorite = mainService.toggleFavorite;
})