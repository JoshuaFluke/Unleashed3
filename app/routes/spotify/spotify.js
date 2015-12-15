/**
 * Created by jfluke on 12/15/2015.
 */
angular.module('workout', [])


  .config(function ($stateProvider) {
      $stateProvider
        .state('spotify', {
            url: '/music',
            templateUrl: 'routes/spotify/spotify.html',
            controller: 'spotifyCtrl'
        })
  })


.controller("spotfiyCtrl", function($scope, myFactory) {


    $scope.searchStuff = function(){

        myFactory.getData($scope.searchInput).then(function(response){

            console.log(response);

            $scope.results = response.data.tracks.items;

        });

    }

})



.service("myFactory", function($http) {

    var getData = function(searchInput){

        var query = 'https://api.spotify.com/v1/search?q='
            + searchInput
            + '&type=track'

        console.log(query);

        return $http(
            {
                method: "GET",
                url: query,
                limit: 50
            }
        ).then(function(response){
            console.log(response.tracks);
            return response;
        });


    }


    return {
        getData: getData,
    }



});