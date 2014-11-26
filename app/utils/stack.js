import Ember from 'ember';

var computed = Ember.computed;
var isNone = Ember.isNone;

export default Ember.Object.extend({
	items: Ember.required(Array),
	length: computed.reads('items.length'),
	capacity: Infinity,
	isEmpty: computed.equal('length', 0),
	isFull: function() {
		return this.get('length') === this.get('capacity');
	}.property('length', 'capacity'),
	pop: function() {
		return this.get('items').popObject();
	},
	push: function(item) {
		if (this.get('isFull')) {
			return;
		}
		
		return this.get('items').pushObject(item);
	},
	trim: function(length) {
		var items = [];
		var capacity = length;

		if (isNone(capacity)) {
			capacity = this.get('length');
		}

		this.set('capacity', capacity);

		for (var i = length; i <= capacity; i++) {
			items.push(this.pop());
		}

		return items;
	},
	empty: function() {
		var items = [];
		var item = this.pop();

		while (item) {
			items.push(item);
			item = this.pop();
		}

		return items;
	},
	toArray: function() {
		return this.get('items').toArray();
	}
});
