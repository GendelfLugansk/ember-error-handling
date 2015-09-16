/**
 * This file is a part of handle-errors project
 *
 * @author Gennady Dogaev
 * @copyright Gennady Dogaev
 */

import Ember from 'ember';

export default Ember.Route.extend({
  memoryStorage: Ember.inject.service('memory-storage'),

  actions: {
    error: function (error, transition) {
      console.log('Application route error handler', error, transition);

      transition.abort();
      this.get('memoryStorage').set('failedTransition', transition);
      return true;
    }
  }
});