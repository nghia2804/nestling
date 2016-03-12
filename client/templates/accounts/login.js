Template.login.events({
  'click .submit' : function(e, doc){
    e.preventDefault();
    var email = doc.find('#login-email').value,
        password = doc.find('#login-password').value;

    Meteor.loginWithPassword(email, password, function(err){
      if (err)
        console.log(err)
      else
        Router.go('/');
    });
  }
});
