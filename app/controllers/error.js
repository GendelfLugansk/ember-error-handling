/**
 * This file is a part of handle-errors project
 *
 * @author Gennady Dogaev
 * @copyright Gennady Dogaev
 */

import Ember from 'ember';

export default Ember.Controller.extend({
  memoryStorage: Ember.inject.service('memory-storage'), //inject a storage service

  /**
   * These computed properties will help to handle a special case,
   * when there is no error status and message (usually when internet
   * connection is gone)
   */
  status: Ember.computed('model', function () {
    if (
      this.model !== undefined &&
      this.model.errors !== undefined &&
      this.model.errors.length > 0 &&
      this.model.errors[0].status !== undefined
    ) {
      return this.model.errors[0].status;
    } else {
      return 0;
    }
  }),
  message: Ember.computed('model', function () {
    if (
      this.model !== undefined &&
      this.model.errors !== undefined &&
      this.model.errors.length > 0
    ) {
      for (var i = 0; i < this.model.errors.length; i++) {
        if (this.model.errors[i].detail !== undefined && this.model.errors[i].detail !== '') {
          return this.model.errors[i].detail;
        }
      }
    }

    return undefined;
  }),
  actions: {
    retry: function () {
      //get a failed transition from storage
      var transition = this.get('memoryStorage').getAndRemove('failedTransition');
      if (transition !== undefined) {
        transition.retry(); //retry transition
      }
    }
  }
});