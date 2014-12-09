import difference from 'ember-cpm/macros/difference';
import product from 'ember-cpm/macros/product';
import Ember from 'ember';

var computed = Ember.computed;
var alias = computed.alias;

export default Ember.ObjectController.extend({
	needs: ['application'],
	effectiveWeight: product('weight', 'intensity'),
	weight: function(key, value) {
		value = this.get('storage.weight') || value || 200;

		this.set('storage.weight', value);
		
		return value;
	}.property('storage.weight'),
	barWeight: function(key, value) {
		value = this.get('storage.barWeight') || value || 55;

		this.set('storage.barWeight', value);
		
		return value;
	}.property('storage.barWeight'),
	intensity: function(key, value) {
		value = this.get('storage.intensity') || value || 1;

		this.set('storage.intensity', value);
		
		return value;
	}.property('storage.intensity'),
	unit: 'lb',
	isDirty: false,
	diff: difference('weightPerSide', 'stacks.totalWeight'),
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

			this.set('isDirty', true);
		},
		reset: function() {
			var stacks = this.get('stacks');
			
			stacks.empty();
			
			this.notifyPropertyChange('stacks');
			this.set('isDirty', false);
		},
		openSettings: function(name) {
			var modalName = 'settings/%@'.fmt(name);

			this.send('openModal', modalName);
		}
	}
});
