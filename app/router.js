import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('barbell-setup', { path: '' });
  this.route('settings', function() {
	  this.route('plates');
	  this.route('barWeights');
	  this.route('units');
  });
  this.route('settings/barWeights');
});

export default Router;
