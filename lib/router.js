Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'not_found',
  waitOn: function() {
  }
});

Router.route('/login', {
  onAfterAction: function() {
    document.title = 'Nestling | Login';
  }
});

Router.route('/', {
  name: 'home',
  onAfterAction: function() {
    document.title = 'Nestling | Home';
  }
});

Router.route('/map', {
  onAfterAction: function() {
    document.title = 'Nestling | Map';
  },
  waitOn: function() {
    return [Meteor.subscribe('data')]
  }
});

Router.route('/comparision', {
  onAfterAction: function() {
    document.title = 'Nestling | Comparision';
  },
  waitOn: function() {
    return [Meteor.subscribe('data')]
  }
});

Router.route('enroll', {
   path: '/enroll-account/:token',
   template: 'enroll',
   onBeforeAction: function() {
     Meteor.logout();
     Session.set('token', this.params.token);
     this.next();
   },
   waitOn: function() {
     return [Meteor.subscribe('enrolledUser')]
  },
   data: function() {
     if(this.ready()){
       return {
           enrolledUser: Meteor.users.findOne(),
           token: this.params.token
       }
     }
   }
});

var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) this.render(this.loadingTemplate);
    else this.render('access_denied');
  }
  else this.next();
}

Router.onBeforeAction(requireLogin, {only: []});
