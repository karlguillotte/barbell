import Ember from 'ember';

export default Ember.Controller.extend({
	needs: ['barbell-setup', 'application'],
	percentages: Ember.computed.reads('controllers.application.percentages'),
	title: 'Percentage',
	actions: {
		setPercentage: function(percentage) {
			this.set('controllers.barbell-setup.percentage', percentage);
			this.send('closePopover');
		}
	}
});
