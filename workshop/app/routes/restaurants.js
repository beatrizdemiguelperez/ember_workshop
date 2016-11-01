import Ember from 'ember';
const restaurantsUrl = 'https://raw.githubusercontent.com/beatrizdemiguelperez/ember_workshop/master/resources/restaurants.json';

export default Ember.Route.extend({

	model: function() {
		return Ember.$.getJSON(restaurantsUrl);
	}
});
