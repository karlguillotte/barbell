import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['toggle'],
	classNameBindings: ['active'],
	active: false,
	click: function() {
		this.toggleProperty('active');
	}
});
