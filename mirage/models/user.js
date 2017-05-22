import { Model } from 'ember-cli-mirage';

export default Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
});
