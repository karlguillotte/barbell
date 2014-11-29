import product from 'ember-cpm/macros/product';
import Ember from 'ember';

var computed = Ember.computed;
var reads = computed.reads;
var compare = Ember.compare;

export default Ember.ObjectController.extend({
	needs: ['application'],
	stacks: reads('controllers.application.stacks'),
	effectiveWeight: product('weight', 'intensity'),
	weight: 400,
	intensity: 1,
	unit: 'lb',
	percentage: function(key, value) {
		var intensity = this.get('intensity');

		if (arguments.length > 1) {
			intensity = value / 100;
			this.set('intensity', intensity);
		}

		return intensity * 100;
	}.property('intensity'),
	barWeight: 45,
	sideWeight: function() {
		return (this.get('effectiveWeight') - this.get('barWeight')) / 2;
	}.property('effectiveWeight', 'barWeight'),
	sideStacks: function() {
		var sideWeight = this.get('sideWeight');
		var stacks = this.get('stacks');

		return stacks.pick(sideWeight);
	}.property(),
	balanceSideStacks: function() {
		var stacks = this.get('sideStacks');
		var weight = this.get('sideWeight');

		stacks.balance(weight);
	}.observes('sideWeight'),
	actions: {
		removePlate: function(weight) {
			var stacks = this.get('sideStacks');
			var stack = stacks.findBy('plateWeight', weight);
			var length = stack.get('length');

			stack.trim(--length);
			
			this.balanceSideStacks();
		},
		reset: function() {
			var stacks = this.get('sideStacks');
			
			stacks.empty();
			
			this.notifyPropertyChange('sideStacks');
		},
		setPercentage: function(percentage) {
			this.set('percentage', percentage);
		},
		setBarWeight: function(weight) {
			this.set('barWeight', weight);
		},
		setWeight: function(weight) {
			this.set('weight', weight);
		}
	}
});
