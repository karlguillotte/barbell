import product from 'ember-cpm/macros/product';
import Ember from 'ember';

var computed = Ember.computed;
var reads = computed.reads;
var alias = computed.alias;
var compare = Ember.compare;

export default Ember.ObjectController.extend({
	needs: ['application'],
	effectiveWeight: product('weight', 'intensity'),
	weight: alias('storage.weight'),
	barWeight: alias('storage.barWeight'),
	intensity: alias('storage.intensity'),
	unit: 'lb',
	percentage: function(key, value) {
		var intensity = this.get('intensity');

		if (arguments.length > 1) {
			intensity = value / 100;
			this.set('intensity', intensity);
		}

		return intensity * 100;
	}.property('intensity'),
	weightPerSide: function() {
		return (this.get('effectiveWeight') - this.get('barWeight')) / 2;
	}.property('effectiveWeight', 'barWeight'),
	stacks: function() {
		var weightPerSide = this.get('weightPerSide');
		var stacks = this.get('controllers.application.stacks');

		return stacks.pick(weightPerSide);
	}.property(),
	balance: function() {
		var stacks = this.get('stacks');
		var weight = this.get('weightPerSide');

		stacks.balance(weight);
	}.observes('weightPerSide'),
	actions: {
		removePlate: function(button) {
			var weight = button.get('data-plate-weight');
			var stacks = this.get('stacks');
			var stack = stacks.findBy('plateWeight', weight);
			var length = stack.get('length');

			stack.trim(--length);
			
			this.balance();
		},
		reset: function() {
			var stacks = this.get('stacks');
			
			stacks.empty();
			
			this.notifyPropertyChange('stacks');
		},
		openSettings: function(name) {
			var modalName = 'settings/%@'.fmt(name);

			this.send('openModal', modalName);
		},
		rest: function() {
			this.send('openModal', 'rest');
		}
	}
});
