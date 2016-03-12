Template.registerHelper( 'routeStatus', function (page) {
  return Router.current().route.getName() === page ? "active" : "";
});
