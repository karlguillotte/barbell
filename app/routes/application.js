import Ember from 'ember';

export default Ember.Route.extend({
	renderComponent: function(componentName, outlet) {
		this.render(modalName, {
			into: 'application',
			outlet: outlet,
			controller: modalName
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
			this.renderComponent(modalName, 'modal');
		},
		closeModal: function() {
			this.disconnectComponent('modal');
		},
		openPopover: function(link) {
			var popoverName = link.get('name');

			this.renderComponent(popoverName, 'popover');
		},
		closePopover: function() {
			this.disconnectComponent('popover');
		}
	}
});
