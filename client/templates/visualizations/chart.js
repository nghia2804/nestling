
Template.map.rendered = function() {

function drawChart(q) {
	var data = Data.find({domain: q}).fetch();
}

function drawParCoords(q) {
	var data = Data.find({domain: q}).fetch();
}

}