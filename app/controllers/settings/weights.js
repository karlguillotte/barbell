import Ember from 'ember';
import Base from './base';

var computed = Ember.computed;

export default Base.extend({
	values: computed.reads('controllers.application.weights'),
	value: computed.alias('controllers.barbell-setup.weight'),
	unit: computed.reads('controllers.barbell-setup.unit'),
	type: 'weights'
});