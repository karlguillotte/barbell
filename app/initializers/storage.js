export function initialize(container /*, application*/) {
  container.injection('route', 'storage', 'service:storage');
  container.injection('controller', 'storage', 'service:storage');
}

export default {
  name: 'storage',
  initialize: initialize
};
