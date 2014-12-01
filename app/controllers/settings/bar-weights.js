import Ember from 'ember';
import Base from './base';

var computed = Ember.computed;

export default Base.extend({
	values: computed.reads('controllers.application.barWeights'),
	value: computed.alias('controllers.barbell-setup.barWeight'),
	valueSuffix: function() {
		var unit = this.get('controllers.barbell-setup.unit');
		
		return ' %@'.fmt(unit);
	}.property('controllers.barbell-setup.unit'),
	title: 'Set a bar weight',
	placeholder: 'Add a bar weight'
});
