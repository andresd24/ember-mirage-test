import { Model } from 'ember-cli-mirage';

export default Model.extend({
  title: DS.attr('string'),
  text: DS.attr('string'),
});
