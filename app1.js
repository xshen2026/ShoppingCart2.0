(function(){
	var app = angular.module('ShoppingCart',['ngRoute','vsGoogleAutocomplete']);

	app.config(['$routeProvider',function($routeProvider){
		$routeProvider.
		  when('/store',{
		  	templateUrl: 'partials/store.html',
		  	controller: 'CartController'
		  }).
		  when('/shipping',{
		  	templateUrl:'partials/shipping.html',
		  	controller:'CartController'
		  }).
		  otherwise({
		  	redirectTo:'/store'
		  });
	}]);



	app.controller('CartController',['$scope', 'myService','dataService', function($scope, myService,dataService){
		$scope.destination = "Maryland";
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

/*----------------Caculate the subtotal and the total Quantity-------------------*/

		$scope.calculate = function() {
			var sum = 0;
			var sum1 = 0;
			//alert('nima');
			for(var i = 0; i < $scope.fruits.length; i++) {
				if ($scope.fruits[i].inCart == true) {
					//alert('fruits[i].quantity');
					sum = sum + $scope.fruits[i].price * $scope.fruits[i].quantity;
					sum1 = sum1 +  $scope.fruits[i].quantity * 1;
					/*sum = sum.toFixed(2);*/
				}
			}
			//alert(sum1);
			$scope.subtotal = sum;
			dataService.subtotal = sum;
			$scope.totalQuantity = sum1;
			dataService.totalQuantity = sum1;
		};
		/*$scope.test = function() {
	   		alert('nima');
		};*/
				
/*------------------calculate the tax and the extra fee-------------------*/
		$scope.doTax = function(){
			$scope.tax = myService.calTax($scope.destination, dataService.subtotal);
			//alert(dataService.totalQuantity);
			if (dataService.totalQuantity < 10) {
				$scope.extra = 20;
			} else {
				$scope.extra = 0;
			}
		};

	}]);

/*-------------calculate tax service-------------------*/

	app.factory('myService',function() {
		
		var service = {};
		
		service.calTax = function(destination, sub_total){
			//alert('!!!');
			var tax = 0;
			if (destination !== "Maryland") {
			//	alert(sub_total);
				tax = sub_total* 0.06;
			} else { 
				alert("Now the destinatino is Maryland");
			}
			//alert(sub_total);
			return tax;
		}
		return service;


	});
 /*------------------data share service-------------------- */
	app.factory('dataService',function(){
		var para = {};
		para.subtotal = 0;
		para.totalQuantity = 0;
		return para;
	});

})();

