import Ember from 'ember';

const CUISINE_OPTIONS = [
	{ name: 'african', title: 'African' },
	{ name: 'american', title: 'American' },
	{ name: 'barbecue', title: 'Barbecue' },
	{ name: 'cafe', title: 'Cafe' },
	{ name: 'chinese', title: 'Chinese' },
	{ name: 'zech/slovak', title: 'Czech / Slovak' },
	{ name: 'german', title: 'German' },
	{ name: 'indian', title: 'Indian' },
	{ name: 'japanese', title: 'Japanese' },
	{ name: 'mexican', title: 'Mexican' },
	{ name: 'pizza', title: 'Pizza' },
	{ name: 'thai', title: 'Thai' },
	{ name: 'vegetarian', title: 'Vegetarian' }
];

export default Ember.Controller.extend({

	CUISINE_OPTIONS,

	selectedCuisins: [],

	filteredRestaurants: Ember.computed('model', function() {
		return this.get('model');
	}),

	actions: {
		filter(){
			let filteredRestaurants = this.get('model');
			const cuisinesFilters =  this.get('selectedCuisins');

			if (!Ember.isEmpty(cuisinesFilters)) {
				filteredRestaurants = filteredRestaurants.filter((item) => {
					return cuisinesFilters.mapBy('name').includes(item.cuisine);
				});
			}
			this.set('filteredRestaurants', filteredRestaurants);
		}
	}


});
