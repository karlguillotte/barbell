import Stack from '../models/stack';
import StackCollection from '../models/stack-collection';
import Ember from 'ember';

var computed = Ember.computed;
var isEmpty = Ember.isEmpty;
var alias = computed.alias;

export default Ember.Controller.extend({
	initPercentages: function() {
		if (!isEmpty(this.get('percentages'))) {
			return;
		}

		var percentages = [100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50];

		this.set('percentages', percentages);
	}.on('init'),
	percentages: alias('storage.percentages'),
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
	initWeights: function() {
		var weights = Ember.A(this.get('weights'));

		this.set('weights', weights);
	}.on('init'),
	weights: alias('storage.weights'),
	initBarWeights: function() {
		if (!isEmpty(this.get('barWeights'))) {
			return;
		}

		this.set('barWeights', [65, 55, 45]);
	}.on('init'),
	barWeights: alias('storage.barWeights')
});
