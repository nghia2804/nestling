Template.dynamic_nav.rendered = function() {
  this.$('.ui.sidebar').sidebar('attach events', '.toc.item');
};

Template.dynamic_nav.events({
  'click #logout' : function(e, t) {
    e.preventDefault();
    Meteor.logout(function(err){
      if (err) console.log(err)
      else Router.go('/');
    });
  },
  'click #login' : function(e, t) {
    e.preventDefault();
    Router.go('/login');
  }
});
