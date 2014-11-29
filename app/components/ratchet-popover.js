import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['popover'],
	title: null,
	_toggleVisible: function() {
		this.$().toggleClass('visible');
	},
	show: function() {
		Ember.run.scheduleOnce('afterRender', this, '_toggleVisible');
	}.on('didInsertElement')
});
