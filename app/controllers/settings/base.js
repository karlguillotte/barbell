import Ember from 'ember';

var required = Ember.required;

export default Ember.Controller.extend({
	needs: ['barbell-setup', 'application'],
	values: required(Array),
	value: required(Number),
	type: required(String),
	newValue: null,
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
			
			this.send('addValue', type, value);
			this.send('set', value);
			this.set('newValue', null);
		}
	}
});
