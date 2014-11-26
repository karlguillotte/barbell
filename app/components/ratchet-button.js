import Ember from 'ember';
import RatchetType from '../mixins/ratchet-type';

export default Ember.Component.extend(RatchetType, {
	tagName: 'button',
	typeClass: 'btn',
	sendClickAction: function() {
		this.sendAction('click', this);
	}.on('click')
});
