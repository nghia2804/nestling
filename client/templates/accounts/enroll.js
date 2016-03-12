Template.enroll.events({
  'click .submit' : function(e, t){
    e.preventDefault();
    Accounts.resetPassword(Session.get('token'), t.find('#login-password').value, function(e,r){
      if(e)
        alert('Error. Please report.');
      else
        Router.go('/');
    });
  }
});
