(function(){
	var app = angular.module('ShoppingCart',[ ]);

	app.controller('CartController',['$scope',function($scope){
		$scope.fruits = [
			{
				name: 'banana',
				price: 0.49,
				quantity: 0,
				information: 'very fresh bananas',
				inCart: false
			},
			{
				name: 'apple',
				price: 2.99,
				quantity: 0,
				information: 'Gala',
				inCart: false
			},
			{
				name: 'blueberry',
				price: 3.49,
				quantity: 0,
				information: 'farmers blueberry, member price',
				inCart:false
			}
		];
		$scope.addToCart = function(itemname) {
			for (var i = 0; i<$scope.fruits.length; i++) {
				if ($scope.fruits[i].name === itemname) {
					$scope.fruits[i].inCart = true;
					$scope.fruits[i].quantity = 1;
				}
			}
		};
	}]);

})();

