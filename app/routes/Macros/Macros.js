/**
 * Created by Josh on 12/8/2015.
 */
angular.module('workout')
  .config(function($stateProvider) {
    $stateProvider
      .state('macros', {
        url: '/macros',
        templateUrl: 'routes/Macros/Macros.html',
        controller: 'macrosCtrl'
      })
  })
  
  
  
 

.controller('macrosCtrl', function($scope, macroService){


  $scope.calculate = function(){
    
    if (!$scope.weight){
       return $scope.input = true;
    }
    else {
      $scope.input = false;
    }
    
    $scope.results = macroService.macrocalculate($scope.weight) //pass in info from view(it needs the weight) into service method
    
     
    
  }


})


.service ('macroService', function(){
  
  
    this.macrocalculate = function(weight){ //needs weight to be available

    
    var obj = {}
    var protein = weight * .95;
    var carbs = protein * .4;
    var fats = protein * .4;
    
    
    obj.presults = Math.round(protein); //adds presults with a value of protein to object

    obj.cresults = Math.round(carbs);

    obj.fresults = Math.round(fats);

    return obj;
  }
  
  
  
  
  
  
  
  
  
  
})
