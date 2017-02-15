angular.module('userProfiles').service('mainService', function($http) {
    var data;
  this.getUsers = function() {
      return $http({
          method: 'GET',
          url: 'https://reqres.in/api/users?page=1'
      }).then(function(response) {
            data = response;
            return data;
        });
  }

  this.toggleFavorite = function(i) {
    data.forEach(function(user) {
        if(user.id === i) {
            user.isFavorite = !user.isFavorite;
        }
    });
  }

});