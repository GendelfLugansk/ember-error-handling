/**
 * This file is a part of handle-errors project
 *
 * @author Gennady Dogaev
 * @copyright Gennady Dogaev
 */

import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.findAll('post');
  }
});
