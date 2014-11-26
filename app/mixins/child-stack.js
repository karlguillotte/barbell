import Ember from 'ember';
import Stack from '../utils/stack';

export default Ember.Mixin.create({
	parent: Ember.required(Stack),
	pop: function() {
		var item = this._super();

		if (item) {
			this.get('parent').push(item);
		}

		return item;
	},
	push: function(item) {
		if (this.get('isFull')) {
			return this.get('parent').push(item);
		}
		
		return this._super(item);
	}
});
