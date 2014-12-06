import Ember from 'ember';
import RatchetType from '../mixins/ratchet-type';

export default Ember.Component.extend(RatchetType, {
	tagName: 'button',
	classNameBindings: ['block:btn-block', 'outlined:btn-outlined'],
	typeClass: 'btn',
	block: false,
	outlined: false,
	sendOnClickAction: function(event) {
		event.preventDefault();

		this.sendAction('on-click', this);
	}.on('click')
});
