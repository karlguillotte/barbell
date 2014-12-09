import Ember from 'ember';

var camelize = Ember.String.camelize;
var compare = Ember.compare;

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
		rest: function() {
			this.controllerFor('rest').send('start');
			this.send('openModal', 'rest');
		},
		addValue: function(type, value) {
			value = Number(value);
			var key = camelize(type);
			var controller = this.controller;
			var values = controller.get(key);

			if (!values.contains(value)) {
				values.insertAt(0, value);
			}

			controller.set(key, values.sort(compare).reverse());
		},
		removeValue: function(type, value) {
			value = Number(value);
			var key = camelize(type);
			var controller = this.controller;
			var values = controller.get(key);
			var indexOf = values.indexOf(value);

			values.removeAt(indexOf, 1);
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
