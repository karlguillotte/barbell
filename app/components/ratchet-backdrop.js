import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['backdrop'],
	sendCloseAction: function() {
		this.sendAction('close');
	}.on('click')
});
