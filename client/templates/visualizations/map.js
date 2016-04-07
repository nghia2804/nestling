Template.map.rendered = function() {

  var map = new Datamap({
    scope: 'usa',
    element: document.getElementById('container')
  });

  var example = Data.findOne();
  console.log(example);

  example = Data.find({isUrban: true}).count();
  console.log("Number of urban residences: " + example);

};
