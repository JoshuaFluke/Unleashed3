var app = angular.module('workout', ['ngAnimate', 'ui.bootstrap', 'ui.router', 'firebase']);


app.controller('DropdownCtrl', function ($scope, fbService) {

	$scope.status = {
		isopen: false
	};

	$scope.comments = fbService.getAllComments()  //firebase object
	// comments.$bindTo($scope, 'comments')

 

	$scope.addComment = function () {
		console.log($scope.commentText)
		$scope.comments.$add($scope.commentText)

	}


});


app.controller('testctrl', function ($scope) {

	$scope.hello = "enter a name"

	$scope.x = true;
	
	// $scope.change = function () {
	// 	 debugger
	// 	if($scope.random == '' && $scope.whatever.$dirty) {

	// 		$scope.hello = "enter a name"
	// 		$scope.showbtn = false

	// 	}
	// 	else {

	// 		$scope.hello = 'hello ' + $scope.random
	// 		$scope.showbtn = true
	// 	}	
	// }
	
	
	$scope.calculate = function (){
		var weight = $scope.weight * .45
		var height = $scope.height * .025
		
		
		$scope.results = weight /  Math.pow(height, 2) 
		
		
		
		
		
	}
	



	


});