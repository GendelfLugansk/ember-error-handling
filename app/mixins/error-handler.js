/**
 * This file is a part of handle-errors project
 *
 * @author Gennady Dogaev
 * @copyright Gennady Dogaev
 */

import Ember from 'ember';

export default Ember.Mixin.create({
  handleErrors: function (error) {
    console.log(error); //dump an error object to see it's structure

    for (var i = 0; i < error.errors.length; i++) {
      if (error.errors[i].detail !== undefined && error.errors[i].detail !== '') {
        //use some addon to show a nice message, I'll use an alert
        alert(error.errors[i].detail);
      }
    }
  }
});