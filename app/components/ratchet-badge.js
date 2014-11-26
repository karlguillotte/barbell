import Ember from 'ember';
import RatchetType from '../mixins/ratchet-type';

export default Ember.Component.extend(RatchetType, {
	tagName: 'span',
	typeClass: 'badge',
	classNameBindings: ['inverted:badge-inverted'],
	inverted: false
});
