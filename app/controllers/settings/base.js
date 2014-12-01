import Ember from 'ember';

var required = Ember.required;
var computed = Ember.computed;

export default Ember.Controller.extend({
	needs: ['barbell-setup', 'application'],
	values: required(Array),
	value: required(Number),
	newValue: null,
	actions: {
		set: function(value) {
			value = Number(value);

			this.set('value', value);
			
			this.send('closeModal');
		},
		remove: function(button) {
			var values = this.get('values');
			var value = Number(button.get('data-value'));			
			var indexOf = values.indexOf(value);
			
			values.removeAt(indexOf);
		},
		add: function(value) {
			var values = this.get('values');

			value = Number(value);

			if (!values.contains(value)) {
				values.push(value);
			}
			
			this.send('set', value);
			this.set('newValue', null);
		}
	}
});
