import Ember from 'ember';

export default Ember.Controller.extend({
	needs: ['barbell-setup', 'application'],
	weights: Ember.computed.reads('controllers.application.weights'),
	title: 'Weight',
	actions: {
		setWeight: function(weight) {
			this.set('controllers.barbell-setup.weight', weight);
			this.send('closePopover');
		}
	}
});
