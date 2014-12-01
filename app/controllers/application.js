import Stack from '../models/stack';
import StackCollection from '../models/stack-collection';
import Ember from 'ember';

var computed = Ember.computed;
var alias = computed.alias;

export default Ember.Controller.extend({
	percentages: [100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50],
	availablePlateWeights: [45, 35, 25, 10, 5, 2.5],
	availableLengthPlateWeights: [8, 6, 6, 8, 4, 2],
	stacks: function() {
		var stacks = this.availablePlateWeights.map(function(plateWeight, index) {
			var plates = [];

			for (var i = 0; i < this.availableLengthPlateWeights[index]; i++) {
				plates.push({
					weight: plateWeight
				});
			}

			return Stack.create({
				plateWeight: plateWeight,
				items: plates
			});
		}, this);

		return StackCollection.create({
			content: stacks
		});
	}.property(),
	units: ['kg', 'lb'],
	weights: [400, 395, 390],
	barWeights: [65, 55, 45]
});
