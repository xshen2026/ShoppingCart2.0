(function(){
	var app = angular.module('ShoppingCart',[ ]);

	app.controller('CartController', function(){
		this.products = fruits;
	});

	var fruits = [
		{
			name: 'banana',
			price: 0.49,
			information: 'very fresh bananas'
		},
		{
			name: 'apple',
			price: 2.99,
			information: 'Gala'
		},
		{
			name: 'blueberry',
			price: 3.49,
			information: 'farmers blueberry, member price'
		}
	];
})();

