import Stack from '../models/stack';
import StackCollection from '../models/stack-collection';
import Ember from 'ember';

export default Ember.Controller.extend({
	percentages: [100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50],
	stacks: function() {
		var availablePlateWeights = [45, 35, 25, 10, 5, 2.5];
		var availableLengthPlateWeights = [8, 6, 6, 8, 4, 2];
		var stacks = availablePlateWeights.map(function(plateWeight, index) {
			var plates = [];

			for (var i = 0; i < availableLengthPlateWeights[index]; i++) {
				plates.push({
					weight: plateWeight
				});
			}

			return Stack.create({
				plateWeight: plateWeight,
				items: plates
			});
		});

		return StackCollection.create({
			content: stacks
		});
	}.property(),
	units: ['kg', 'lb'],
	weights: [400, 395, 390],
	barWeights: [65, 55, 45]
});
