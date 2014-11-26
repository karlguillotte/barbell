import Ember from 'ember';
import { sumBy, reduce } from '../utils/sum';

function sumByWeight(plates) {
	return sumBy(plates, 'weight');
}

var StackCollection = Ember.ArrayProxy.extend({
	totalWeight: function() {
		return this.getEach('totalWeight').reject(isNaN).reduce(reduce, 0);
	}.property('@each.totalWeight'),
	empty: function() {
		this.invoke('empty');
	},
	pickStacks: function(weight) {
		var weightToPick = weight;
		var stacks = this.sortBy('plateWeight').reverse();
		
		return stacks.map(function(stack) {
			stack = stack.pick(weightToPick);

			weightToPick = weightToPick - sumByWeight(stack.toArray());

			return stack;
		});
	},
	pick: function(weight) {
		return ChildStackCollection.create({
			content: this.pickStacks(weight)
		});
	}
});

var ChildStackCollection = StackCollection.extend({
	balance: function(weight) {
		var weightToPick = weight;
		var stacks = this.sortBy('plateWeight').reverse();

		stacks.forEach(function(stack) {
			stack.balance(weightToPick);

			weightToPick = weightToPick - sumByWeight(stack.toArray());
		});
	}
});

export default StackCollection;