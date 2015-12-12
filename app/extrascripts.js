/**
 * Created by Josh on 12/8/2015.
 */
$scope.hello = "enter a name"
$scope.x = true;

$scope.change = function () {
  debugger
  if($scope.random == '' && $scope.whatever.$dirty) {

    $scope.hello = "enter a name"
    $scope.showbtn = false

  }
  else {

    $scope.hello = 'hello ' + $scope.random
    $scope.showbtn = true
  }
}
