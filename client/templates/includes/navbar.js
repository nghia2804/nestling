Template.navbar.events({
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
