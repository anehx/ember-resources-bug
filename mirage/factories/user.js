import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  name: (i) => `User ${i + 1}`,
});
