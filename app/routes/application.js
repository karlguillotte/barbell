import Ember from 'ember';

var camelize = Ember.String.camelize;

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
		addValue: function(type, value) {
			value = Number(value);
			var key = camelize(type);
			var controller = this.controller;
			var values = controller.get(key);

			values.insertAt(0, value);
			controller.set(key, values);
		},
		removeValue: function(type, value) {
			value = Number(value);
			var key = camelize(type);
			var controller = this.controller;
			var values = controller.get(key);
			var indexOf = values.indexOf(value);

			values.removeAt(indexOf, value);
			controller.set(key, values);
		},
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
