import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { task } from 'ember-concurrency';
import { useTask } from 'ember-resources';

export default class ApplicationController extends Controller {
  @service store;

  users = useTask(this, this.fetchUsers, () => {});

  @task
  *fetchUsers() {
    return yield this.store.query('user', {});
  }
}
