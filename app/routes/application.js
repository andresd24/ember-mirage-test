export default Ember.Route.extend({

  model () {
    return Ember.RSVP.hash({
      posts: this.store.findAll("post"),
      users: this.store.findAll("user")
    });
  },

  setupController (controller, models) {
    controller.setProperties(models);
    var posts = models.posts;
    var users = models.users;

    controller.set('posts', posts);
    controller.set('users', users );
  }
});
