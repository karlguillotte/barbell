import Ember from 'ember';

export default Ember.Route.extend({
	view: function() {
		return this.container.lookup('view:application');
	},
	popover: function() {
		return this.view().$('.popover:first');
	},
	modal: function() {
		return this.view().$('.modal:first');
	},
	actions: {
		openModal: function() {
			this.modal().addClass('active');
		},
		closeModal: function() {
			this.modal().addClass('remove');
		},
		openPopover: function(component, name) {
			this.render(name, {
				into: 'application',
				outlet: 'popover',
				view: this.container.lookup('component:ratchet-popover')
			});
		},
		closePopover: function() {
			this.disconnect({
				into: 'application',
				outlet: 'popover'
			});
		}
	}
});
