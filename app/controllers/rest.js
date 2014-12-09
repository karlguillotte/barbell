import Ember from 'ember';
import moment from 'moment';

var computed = Ember.computed;

export default Ember.Controller.extend({
	second: function() {
		var second = this.get('clock.second');
		
		return moment(second % 60, 's').format('ss');
	}.property('clock.second'),
	minute: computed.reads('clock.minute'),
	actions: {
		start: function() {
			this.clock.reset();
		}
	}
});
