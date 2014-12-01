import Ember from 'ember';

var required = Ember.required;
var computed = Ember.computed;

export default Ember.Controller.extend({
	needs: ['barbell-setup', 'application'],
	values: required(Array),
	value: required(Number),
	title: required(String),
	valueSuffix: required(String),
	actions: {
		set: function(value) {
			this.set('value', value);
			
			this.send('closePopover');
		},
		remove: function(value) {
			var values = this.get('values');

			values.removeObject(value);
			this.send('closePopover');
		},
		add: function(value) {
			values.pushObject(value);

			this.send('set', value);
		}
	}
});
