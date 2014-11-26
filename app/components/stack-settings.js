import Ember from 'ember';

export default Ember.Component.extend({
	weight: 0,
	count: 0,
	unit: 0,
	active: false,
	actions: {
		addPlate: function() {
			return this.incrementProperty('count');
		},
		removePlate: function() {
			return this.decrementProperty('count');
		}
	}
});
