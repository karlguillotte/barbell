import Ember from 'ember';
import Base from './base';

var computed = Ember.computed;

export default Base.extend({
	values: computed.reads('controllers.application.percentages'),
	value: computed.alias('controllers.barbell-setup.percentage'),
	valueSuffix: '%',
	title: 'Set a percentage',
	placeholder: 'Add a new percentage'
});