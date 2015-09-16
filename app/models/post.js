/**
 * This file is a part of handle-errors project
 *
 * @author Gennady Dogaev
 * @copyright Gennady Dogaev
 */

import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  text: DS.attr('string')
});