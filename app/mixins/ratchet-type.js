import Ember from 'ember';

export default Ember.Mixin.create({
	classNameBindings: ['typeClass', 'typeClassName'],
	typeClass: Ember.required(String),
	type: null,
	typeClassName: function() {
		var type = this.get('type');
		var typeClass = this.get('typeClass');

		if (!type) {
			return null;
		}

		return '%@-%@'.fmt(typeClass, type);
	}.property('type')
});
