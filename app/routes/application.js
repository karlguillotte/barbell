import Ember from 'ember';

export default Ember.Route.extend({
	renderComponent: function(outlet, componentName) {
		this.render(componentName, {
			into: 'application',
			outlet: outlet,
			controller: componentName
		});
	},
	disconnectComponent: function(outlet) {
		this.disconnectOutlet({
			parentView: 'application',
			outlet: outlet
		});		
	},
	actions: {
		openModal: function(modalName) {
			this.renderComponent('modal', modalName);
		},
		closeModal: function() {
			this.disconnectComponent('modal');
		},
		openPopover: function(link) {
			var popoverName = link.get('name');

			this.renderComponent('popover', popoverName);
		},
		closePopover: function() {
			this.disconnectComponent('popover');
		}
	}
});
