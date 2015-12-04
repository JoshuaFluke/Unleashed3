var app = angular.module('workout', ['ngAnimate', 'ui.bootstrap','ui.router','firebase']);


app.controller('DropdownCtrl', function ($scope, fbService) {

  $scope.status = {
    isopen: false
  };
  
  var comments = fbService.getAllComments()
	$scope.comments = comments;
	// comments.$bindTo($scope, 'comments')

  $scope.commentText = "";
console.log($scope.comments)

$scope.addComment = function(){
	console.log($scope.commentText)
	comments.$add($scope.commentText)
	
}

});