import Ember from 'ember';

var serialize = JSON.stringify;
var deserialize = JSON.parse;
var isArray = Ember.isArray;

export default Ember.Object.extend({
	persistence: window.localStorage,
	namespace: 'ember-storage-service',
	setStorageEventListener: function() {
		var callback = this.handleStorageEvent.bind(this);

		window.addEventListener('storage', callback);
	}.on('init'),
	unknownProperty: function(key) {
		var namespacedKey = this.computeNamespacedKey(key);
		var persistence = this.get('persistence');
		var payload = persistence.getItem(namespacedKey);
		var property = deserialize(payload);

		return property;
	},
	setUnknownProperty: function(key, value) {
		var namespacedKey = this.computeNamespacedKey(key);
		var payload = serialize(value);
		var persistence = this.get('persistence');
		
		persistence.setItem(namespacedKey, payload);
		this.notifyPropertyChange(key);
		
		return true;
	},
	removeItem: function(key) {
		var namespacedKey = this.computeNamespacedKey(key);
		var persistence = this.get('persistence');

		persistence.removeItem(namespacedKey);
	},
	computeNamespacedKey: function(key) {
		var namespace = this.get('namespace');

		return '%@:%@'.fmt(namespace, key);
	},
	handleStorageEvent: function(event) {
		var storageEvent = event.originalEvent;
		var storageKey = storageEvent.key;
		var tokens = storageKey.split(':');
		var namespace = tokens[0];
		var key = tokens[1];
		var storageNamespace = this.get('namespace');

		if (key && namespace === storageNamespace) {
			this.notifyPropertyChange(key);
		}
	}
});