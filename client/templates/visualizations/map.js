Template.map.rendered = function() {

  var connecticut = Data.find({domain: 2}).count();
  var massachussets = Data.find({domain: 3}).count();
  var newYork = Data.find({domain: 4}).count();
  var newJersey = Data.find({domain: 5}).count();
  var penn = Data.find({domain: 6}).count();
  var illinois = Data.find({domain: 7}).count();
  var indiana = Data.find({domain: 8}).count();
  var michigan = Data.find({domain: 9}).count();
  var wisconsin = Data.find({domain: 10}).count();
  var iowa = Data.find({domain: 11}).count();
  var kansas = Data.find({domain: 12}).count();
  var missouri = Data.find({domain: 13}).count();
  var virginia = Data.find({domain: 14}).count();
  var delaware = Data.find({domain: 15}).count();
  var georgia = Data.find({domain: 16}).count();
  var northCar = Data.find({domain: 17}).count();
  var florida = Data.find({domain: 18}).count();
  var alabama = Data.find({domain: 19}).count();
  var tennessee = Data.find({domain: 20}).count();
  var arkansas = Data.find({domain: 21}).count();
  var texas = Data.find({domain: 22}).count();
  var colorado = Data.find({domain: 23}).count();
  var idaho = Data.find({domain: 24}).count();
  var arizona = Data.find({domain: 25}).count();
  var nevada = Data.find({domain: 26}).count();
  var california = Data.find({domain: 27}).count();

  function getDBid(state) {
  	switch(state) {
  		case "AZ":
  			return 25;
  		case "CO":
  			return 23;
  		case "DE":
  			return 15;
  		case "FL":
  			return 18;
  		case "GA":
  			return 16;
  		case "ID":
  			return 24;
  		case "IL":
  			return 7;
  		case "IN":
  			return 8;
  		case "IA":
  			return 11;
  		case "KS":
  			return 12;
  		case "MA":
  			return 3;
  		case "MI":
  			return 9;
  		case "MS":
  			return 13;
  		case "NC":
  			return 17;
  		case "NV":
  			return 26;
  		case "NJ":
  			return 5;
  		case "NY":
  			return 4;
  		case "PA":
  			return 6;
  		case "TN":
  			return 20;
  		case "TX": 
  			return 22;
  		case "WI":
  			return 10;
  		case "VA":
  			return 14;
  		case "CA":
  			return 27;
  		case "CT":
  			return 2;
  		case "AR":
  			return 21;
  		case "AL":
  			return 19;
  	}
  }

  var map = new Datamap({
    scope: 'usa',
    element: document.getElementById('container'), 
    geographyConfig: {
    highlightBorderColor: '#bada55',
    popupTemplate: function(geography, data) {
      return '<div class="hoverinfo">' + geography.properties.name + "</br>" + 'Number of Survey Results: ' +  data.surveyResults + ' '
	    },
	    highlightBorderWidth: 3
	  },

	  fills: {
	  "200": "#668CFF",
	  "400": "#1a53ff",
	  "600": "#0039e6",
	  "over600": "#002699",
	  defaultFill: "#e6ecff"
	},
	data:{
	  "AZ": {
	      "fillKey": "200", 
	      "surveyResults": arizona
	  },
	  "CO": {
	      "fillKey": "200",
	      "surveyResults": colorado
	  },
	  "DE": {
	      "fillKey": "600",
	      "surveyResults": delaware
	  },
	  "FL": {
	      "fillKey": "400",
	      "surveyResults": florida
	  },
	  "GA": {
	      "fillKey": "400",
	      "surveyResults": georgia
	  },
	  "HI": {
	      "surveyResults": 0
	  },
	  "ID": {
	      "fillKey": "400",
	      "surveyResults": idaho
	  },
	  "IL": {
	      "fillKey": "400",
	      "surveyResults": illinois
	  },
	  "IN": {
	      "fillKey": "400",
	      "surveyResults": indiana
	  },
	  "IA": {
	      "fillKey": "400",
	      "surveyResults": iowa
	  },
	  "KS": {
	      "fillKey": "over600",
	      "surveyResults": kansas
	  },
	  "KY": {
	      "surveyResults": 0
	  },
	  "LA": {
	      "surveyResults": 0
	  },
	  "MD": {
	      "surveyResults": 0
	  },
	  "ME": {
	      "surveyResults": 0
	  },
	  "MA": {
	  	  "fillKey": "over600",
	      "surveyResults": massachussets
	  },
	  "MN": {
	      "surveyResults": 0
	  },
	  "MI": {
	      "fillKey": "400",
	      "surveyResults": michigan
	  },
	  "MS": {
	      "surveyResults": missouri
	  },
	  "MO": {
	      "surveyResults": 0
	  },
	  "MT": {
	      "surveyResults": 0
	  },
	  "NC": {
	      "fillKey": "over600",
	      "surveyResults": northCar
	  },
	  "NE": {
	      "surveyResults": 0
	  },
	  "NV": {
	  	  "fillKey": "over600",
	      "surveyResults": nevada
	  },
	  "NH": {
	      "surveyResults": 0
	  },
	  "NJ": {
	      "fillKey": "400",
	      "surveyResults": newJersey
	  },
	  "NY": {
	      "fillKey": "200",
	      "surveyResults": newYork
	  },
	  "ND": {
	      "surveyResults": 0
	  },
	  "NM": {
	      "surveyResults": 0
	  },
	  "OH": {
	      "surveyResults": 0
	  },
	  "OK": {
	      "surveyResults": 0
	  },
	  "OR": {
	      "surveyResults": 0
	  },
	  "PA": {
	      "fillKey": "400",
	      "surveyResults": penn
	  },
	  "RI": {
	      "surveyResults": 0
	  },
	  "SC": {
	      "surveyResults": 0
	  },
	  "SD": {
	      "surveyResults": 0
	  },
	  "TN": {
	      "fillKey": "200",
	      "surveyResults": tennessee
	  },
	  "TX": {
	      "fillKey": "200",
	      "surveyResults": texas
	  },
	  "UT": {
	      "surveyResults": 0
	  },
	  "WI": {
	      "fillKey": "over600",
	      "surveyResults": wisconsin
	  },
	  "VA": {
	      "fillKey": "400",
	      "surveyResults": virginia
	  },
	  "VT": {
	      "surveyResults": 0
	  },
	  "WA": {
	      "surveyResults": 0
	  },
	  "WV": {
	      "surveyResults": 0
	  },
	  "WY": {
	      "surveyResults": 0
	  },
	  "CA": {
	      "surveyResults": california
	  },
	  "CT": {
	      "fillKey": "600",
	      "surveyResults": connecticut
	  },
	  "AK": {
	      "surveyResults": 0
	  },
	  "AR": {
	      "fillKey": "200",
	      "surveyResults": arkansas
	  },
	  "AL": {
	      "fillKey": "400",
	      "surveyResults": alabama
	  }
	}
  });


	var showCharts = d3.selectAll("path")
		.on("click", function(d) {
			var id = getDBid(d.id);
			drawChart(id);
			d3.selectAll("table")
			.style("visibility", "visible");
		});







	function drawChart(q) {

		var marginChart = {top: 50, right: 0, bottom: 30, left: 80};
		var widthChart = 620 - marginChart.left - marginChart.right;
		var heightChart = 400 - marginChart.top - marginChart.bottom;

		var x = d3.scale.ordinal()
		.rangeRoundBands([0, widthChart], .1);

		var y = d3.scale.linear()
		.range([heightChart, 0]);

		var xAxisChart = d3.svg.axis()
		.scale(x)
		.orient("bottom");

		var yAxisChart = d3.svg.axis()
		.scale(y)
		.orient("left");


		var chart = d3.select(".chart");
		chart.selectAll("svg").remove();


		var svgChart = d3.select(".chart").append("svg")
		   .attr("width", widthChart + marginChart.left + marginChart.right)
		    .attr("height", heightChart + marginChart.top + marginChart.bottom)
		  .append("g")
		    .attr("transform", "translate(" + marginChart.left + "," + marginChart.top + ")");


		var btus = ["Heating \n BTUs", "Cooling \n BTUs", "Water \n BTUs", "Ref \n BTUs", "Other \n BTUs", "Total \n BTUs"];
		var resultsNum = Data.find({domain: q}).count();
		var heatBTUS = 0;
		var coolBTUS = 0;
		var waterBTUS = 0;
		var refBTUS = 0;
		var otherBTUS = 0;
		var totalBTUS = 0;
		var data = Data.find({domain: q}).fetch();
		data.forEach(function (d) {
			heatBTUS += d["heatBTU"];
			coolBTUS += d["coolBTU"];
			waterBTUS += d["waterBTU"];
			refBTUS += d["refBTU"];
			otherBTUS += d["otherBTU"];
			totalBTUS += d["totalBTU"];
		});
		var averages = [heatBTUS / resultsNum, coolBTUS / resultsNum, waterBTUS / resultsNum, refBTUS / resultsNum, otherBTUS / resultsNum, totalBTUS / resultsNum];
		console.log(averages);

		x.domain(btus.map(function(d) { return d; }));
  		y.domain([0, d3.max(averages, function(d) { return d; })]);

	  	svgChart.append("g")
		      .attr("class", "x axis")
		      .attr("transform", "translate(0," + heightChart + ")")
	      .style("fill", "black")
	      .call(xAxisChart);

		svgChart.append("g")
				.attr("class", "y axis")
				.style("fill", "black")
				.call(yAxisChart)
			.append("text")
				.attr("transform", "rotate(-90)")
				.attr("y", 6)
				.attr("dy", ".71em")
				.style("text-anchor", "end")
				.style("fill", "black")
				.text("Average BTUs");


		var barFix = 0;
		svgChart.selectAll(".barData")
		      .data(averages)
		    .enter().append("rect")
		      .attr("class", "barData")
		      .attr("x", function(d) { return x(d); })
		      .attr("width", x.rangeBand())
		      .attr("y", function(d) { return y(d); })
		      .attr("transform", function(d) {
		      	var xVal = (91 * barFix);
		      	barFix++;
		      	return "translate(" + xVal + "," + 0 + ")" ; } )
		      .attr("height", function(d) { return heightChart - y(d); })
		      .style("fill", "black");
	}

	

};
