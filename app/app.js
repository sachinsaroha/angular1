var app = angular.module('myApp', []);

app.controller('myController', [ '$scope', function($scope){

	$scope.toggle= true;

	$scope.customers = [
						{'name':'Ross', 'age':'29'},
						{'name':'Chandler', 'age':'25'},	
						{'name':'Joey', 'age':'29'}
					   ];

	$scope.show = function(){
		$scope.toggle = true; 
	};
	$scope.hide = function(){
		$scope.toggle = false; 
	};

	$scope.name1 = 'Sumit Dabas';
}]);