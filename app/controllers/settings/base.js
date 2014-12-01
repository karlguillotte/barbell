import Ember from 'ember';

var required = Ember.required;
var computed = Ember.computed;

export default Ember.Controller.extend({
	needs: ['barbell-setup', 'application'],
	values: required(Array),
	value: required(Number),
	newValue: null,
	title: required(String),
	valueSuffix: required(String),
	placeholder: required(String),
	close: function() {
		this.send('closeModal');
	},
	actions: {
		set: function(value) {
			this.set('value', value);
			
			this.close();
		},
		remove: function(value) {
			var values = this.get('values');

			values.removeObject(value);

			this.close();
		},
		add: function(value) {
			var values = this.get('values');

			values.pushObject(value);

			this.send('set', value);
			this.set('newValue', null);
		}
	}
});
