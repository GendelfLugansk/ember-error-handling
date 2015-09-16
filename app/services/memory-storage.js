/**
 * This file is a part of handle-errors project
 *
 * @author Gennady Dogaev
 * @copyright Gennady Dogaev
 */

import Ember from 'ember';

export default Ember.Service.extend({
  getAndRemove: function (key) {
    var obj = this.get(key);
    if (obj !== undefined) {
      this.set(key, undefined);
    }
    return obj;
  }
});