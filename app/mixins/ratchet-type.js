import Ember from 'ember';

export default Ember.Mixin.create({
	classNameBindings: ['typeClass', 'typeClassName'],
	typeClass: Ember.required(String),
	type: null,
	typeClassName: function() {
		var type = this.get('type');
		var typeClass = this.get('typeClass');

		Ember.assert('"type" and "typeClass" are required for a %@ component.'.fmt(this.constructor.toString()), type && typeClass);

		return '%@-%@'.fmt(typeClass, type);
	}.property('type')
});
