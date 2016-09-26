(function(){
	var app = angular.module('ShoppingCart',[ ]);

	app.controller('CartController',['$scope', 'myService', function($scope, myService){
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
			for (var i = 0; i < $scope.fruits.length; i++) {
				if ($scope.fruits[i].name === itemname) {
					$scope.fruits[i].inCart = true;
					$scope.fruits[i].quantity = 1;
				}
			}
		};
		$scope.remove = function(itemname) {
			for(var i = 0; i < $scope.fruits.length; i++) {
				if ($scope.fruits[i].name === itemname) {
					$scope.fruits[i].inCart = false;
				}
			}
		};

		/*Caculate the subtotal*/

		$scope.calculate = function() {
			var sum = 0;
			//alert('nima');
			for(var i = 0; i < $scope.fruits.length; i++) {
				if ($scope.fruits[i].inCart == true) {
					//alert('fruits[i].quantity');
					sum = sum + $scope.fruits[i].price * $scope.fruits[i].quantity;
					/*sum = sum.toFixed(2);*/
				}
			}
			$scope.subtotal = sum;
		};
		$scope.test = function() {
	   		alert('nima');
		};
		$scope.destination = "Maryland";
		
		$scope.doTax = function(){
			$scope.tax = myService.calTax($scope.destination, $scope.subtotal);
		}
	}]);

	app.factory('myService',function() {
		
		var service = {};
		
		service.calTax = function(destination, sub_total){
			//alert('!!!');
			var tax = 0;
			if (destination !== "Maryland") {
				alert(sub_total);
				tax = sub_total* 0.06;
			} else { 
				alert("Now the destinatino is Maryland");
			}
			//alert(sub_total);
			return tax;
		}
		return service;


	});

})();

