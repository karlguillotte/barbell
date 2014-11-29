import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['backdrop'],
	sendClose: function() {
		this.sendAction('close');
	}.on('click')
});
