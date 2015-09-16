/**
 * This file is a part of handle-errors project
 *
 * @author Gennady Dogaev
 * @copyright Gennady Dogaev
 */

import Ember from 'ember';
import ErrorHandler from '../mixins/error-handler';

export default Ember.Controller.extend(ErrorHandler, {
  actions: {
    generatePost: function () {
      var post = this.get('store')
        .createRecord('post');
      post.set('title', 'Generated post');
      post.set('text', 'I like Ember.js');
      post.save().then(undefined, (error) => {
        this.handleErrors(error);
        post.rollbackAttributes(); //As saving is failed, we need to rollback changes
      });
    }
  }
});