import Ember from 'ember';
import ChildStackMixin from 'barbell/mixins/child-stack';

module('ChildStackMixin');

// Replace this with your real tests.
test('it works', function() {
  var ChildStackObject = Ember.Object.extend(ChildStackMixin);
  var subject = ChildStackObject.create();
  ok(subject);
});
