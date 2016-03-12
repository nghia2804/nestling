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
