import Ember from 'ember';
import RatchetTypeMixin from 'barbell/mixins/ratchet-type';

module('RatchetTypeMixin');

// Replace this with your real tests.
test('it works', function() {
  var RatchetTypeObject = Ember.Object.extend(RatchetTypeMixin);
  var subject = RatchetTypeObject.create();
  ok(subject);
});
