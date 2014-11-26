import Ember from 'ember';

export default Ember.Component.extend({
	name: null,
	open: 'openPopover',
	openPopover: function(popoverName) {
		this.sendAction('open', this, this.get('name'));
	}.on('click')
});
