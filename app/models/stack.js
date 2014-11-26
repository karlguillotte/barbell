import Ember from 'ember';
import product from 'ember-cpm/macros/product';
import Stack from '../utils/stack';
import ChildStack from '../mixins/child-stack';

var isNone = Ember.isNone;

var PlateStack = Stack.extend({
	plateWeight: 0,
	totalWeight: product('length', 'plateWeight'),
	pickPlates: function(weight, max) {
		var plateWeight = this.plateWeight;
		var plates = [];
		var count = 0;
		var capacity;

		if (plateWeight) {
			count = Math.floor(weight / plateWeight);
			capacity = this.get('capacity');

	 		count = Math.min(count, capacity, isNone(max) ? Infinity : max);
		}

		for (var i = 0; i < count; i++) {
			var plate = this.pop();

			plates.push(plate);
		}

		return plates.compact();
	},
	pick: function(weight) {
		return ChildPlateStack.create({
			parent: this,
			plateWeight: this.get('plateWeight'),
			items: this.pickPlates(weight)
		});		
	},
	push: function(plate) {
		if (plate.weight !== this.plateWeight) {
			return;
		}

		return this._super(plate);
	}
});

var ChildPlateStack = PlateStack.extend(ChildStack, {
	balance: function(weight) {
		var capacity = this.get('capacity');
		var parent = this.get('parent');
		var plates = parent.pickPlates(weight, capacity);

		this.empty();
		plates.forEach(function(plate) {
			this.push(plate);
		}, this);
	}
});

export default PlateStack;