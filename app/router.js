import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('posts', {path: '/posts/:post_id'});
  this.route('users', {path: '/users/:user_id'});
});

export default Router;
