import Ember from 'ember';

export default Ember.Controller.extend({
	needs: ['barbell-setup', 'application'],
	barWeights: Ember.computed.reads('controllers.application.barWeights'),
	title: 'Bar Weight',
	actions: {
		setBarWeight: function(weight) {
			this.set('controllers.barbell-setup.barWeight', weight);
			this.send('closePopover');
		}
	}
});
