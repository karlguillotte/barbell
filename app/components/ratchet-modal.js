import Ember from 'ember';

var run = Ember.run;
var next = run.next;
var bind = run.bind;

export default Ember.Component.extend({
	classNames: ['modal'],
	title: null,
	addActiveClassName: function() {
		var element = this.get('element');

		next(element.classList, 'add', 'active');
	}.on('didInsertElement'),
	closed: 'closeModal',
	actions: {
		close: function() {
			var element = this.get('element');
			var sendAction = bind(this, 'sendAction', 'closed');

			element.addEventListener('webkitTransitionEnd', sendAction);

			element.classList.remove('active');
		}
	}
});
