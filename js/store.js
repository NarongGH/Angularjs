(function(){
	var app = angular.module('store', []);
	app.controller('StoreController', function(){
		this.product = clothes;
	});
	var clothes = [
		{
			cloth: 'T-shirt',
			price: 20,
			description: 'A nice t-shirt',
			img: [{
				full: 'img/t_shirt_full.png',
				thumb: 'img/t_shirt_thumb.jpg'
			}]
		},
		{
			cloth: 'Jeans',
			price: 12,
			description: 'It is a very cool jeans.',
			img: [{
				full: 'img/jeans_full.jpg',
				thumb: 'img/jeans_thumb.jpg'
			}]
		}
	]
})();