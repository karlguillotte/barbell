import Ember from 'ember';

var required = Ember.required;
var isNone = Ember.isNone;

export default Ember.Controller.extend({
	needs: ['barbell-setup', 'application'],
	values: required(Array),
	value: required(Number),
	type: required(String),
	newValue: null,
	minValue: 1,
	maxValue: required(Number),
	isValid: function() {
		var newValue = this.get('newValue');
		var minValue = this.get('minValue');
		var maxValue = this.get('maxValue');

		if (isNone(newValue)) {
			return false;
		}

		newValue = Number(newValue);

		return newValue >= minValue && newValue <= maxValue;
	}.property('newValue'),
	actions: {
		set: function(value) {
			this.set('value', value);
			
			this.send('closeModal');
		},
		remove: function(button) {
			var value = button.get('data-value');
			var type = this.get('type');

			this.send('removeValue', type, value);
		},
		add: function(value) {
			var type = this.get('type');
			
			if (!this.get('isValid')) {
				return;
			}

			this.send('addValue', type, value);
			this.send('set', value);
			this.set('newValue', null);
		}
	}
});
