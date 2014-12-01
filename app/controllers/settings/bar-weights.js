import Ember from 'ember';
import Base from './base';

var computed = Ember.computed;

export default Base.extend({
	values: computed.reads('controllers.application.barWeights'),
	value: computed.alias('controllers.barbell-setup.barWeight'),
	unit: computed.reads('controllers.barbell-setup.unit')
});
