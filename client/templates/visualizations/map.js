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
  		default:
  			return -1;
  	}
  }

  var ct = document.querySelector('#container');
  console.log($('#container'));
  $('#container').innerHeight($('#container').innerWidth() * 0.6);

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
<<<<<<< HEAD
<<<<<<< HEAD
	  "200": "#709370", // 1-200
	  "400": "#5b845b", // 201 - 400
	  "600": "#477547", // 401 - 600
	  "over600": "#336633", // 601 - whatever
	  defaultFill: "#eef6ee" // 0
=======
=======
>>>>>>> theosbornidentity/master
	  "200": "#709370",
	  "400": "#5b845b",
	  "600": "#477547",
	  "over600": "#336633",
	  defaultFill: "#d6e0d6"
<<<<<<< HEAD
>>>>>>> theosbornidentity/master
=======
>>>>>>> theosbornidentity/master
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
	  	  "fillKey": "400",
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

  var state1;
  var mode = 0;	// 0: single, 1: compare
  var chartmode = 0; // 0 = bar chart, 1: par char, 2: scatter plot
  var isState1Select = 0; // 0 = no , 1 = yes
  var selectedState;

<<<<<<< HEAD
  var renderLabelUpdate= function() {
  	$('#message').addClass('hidden');
  	var tag;
	if (getDBid(selectedState.id) != -1) {
  		document.getElementById('statename-label').innerHTML =  selectedState.properties.name;
  		tag = '<div><h3> Selected State: '+ selectedState.properties.name + '</h3></div>';
   	}
  	$('#list').html(tag);
  }

  $('.chartlabel-click').click(function() {
  	chartmode = $(this).attr('data-index');
  	console.log(chartmode);
  	renderSingleLayout();
  	if (isState1Select == 1) {
  		renderSingleChart();
  	}
  });

  var renderSingleLayout = function(){
  	  	$('#statechart1-view').css({'max-width': '50%'});
  		$('#statechart2-view').css({'max-width': '75%'});
  		$('#statechart3-view').css({'max-width': '75%'});
  		if (chartmode == 0) {
  			$('#statechart1-view').removeClass('hidden');
  			$('#statechart2-view').addClass('hidden');
  			$('#statechart3-view').addClass('hidden');
  		} else if (chartmode == 1) {
  			$('#statechart1-view').addClass('hidden');
  			$('#statechart2-view').removeClass('hidden');
  			$('#statechart3-view').addClass('hidden');
  		} else if (chartmode == 2) {
  			$('#statechart1-view').addClass('hidden');
  			$('#statechart2-view').addClass('hidden');
  			$('#statechart3-view').removeClass('hidden');
  			$('#statechart3-view').css({'height': '600px'})
  		} else {
  			$('#statechart1-view').addClass('hidden');
  			$('#statechart2-view').addClass('hidden');
  			$('#statechart3-view').addClass('hidden');
  		}

  		if (isState1Select == 0) {
  			$('#statechart1-label').addClass('hidden');
  			$('#statechart2-label').addClass('hidden');
  			$('#statechart3-label').addClass('hidden');
  		} else if (isState1Select == 1) {
  			$('#statechart1-label').removeClass('hidden');
  			$('#statechart2-label').removeClass('hidden');
  			$('#statechart3-label').removeClass('hidden');
  		}
  }

  renderSingleLayout();

  var renderSingleChart = function(id){
  	if (chartmode == 0) {
  		drawChart(parseInt(state1), "#barchart", "#statechart1-view");
  		$('#statechart1-view').html += "<div> <h3 style=\"text-align: center;\"> Everage Energy Consumption</h3></div><div> <h3 style=\"text-align: center;\"> Of Different Types in 2009 (BTUs)</h3></div>";
  	} else if (chartmode == 1) {
  		drawParCoords(parseInt(state1), "#pcchart", "#statechart2-view");
  		$('#statechart2-view').html += "<div> <h3 style=\"text-align: center;\"> Parallel Coordinates Chart of Everage Energy Consumption</h3></div><div> <h3 style=\"text-align: center;\"> Of Different Types in 2009 (BTUs)</h3></div>";
  	} else if (chartmode == 2) {
  		drawScatterPlot(parseInt(state1), "heatBTU", "coolBTU", "built" ,"#plotchart", "#statechart3-view");
  	}
  }

 

	var showCharts = d3.selectAll("path")
		.on("click", function(d) {
			mode = 0;
			state1 = getDBid(d.id);
			selectedState = d;
			if (state1 != -1 ){
				isState1Select = 1;
				console.log("State1: " + parseInt(state1));
				renderLabelUpdate();
				renderSingleLayout();
				renderSingleChart(parseInt(state1));
				
			}
		});


	function drawChart(q, id, view) {
		console.log(q);
		console.log ($(view).innerWidth());
		var marginChart = {top: 50, right: 0, bottom: 30, left: 50};
		var widthChart = $(view).innerWidth() - marginChart.left - marginChart.right;
		var heightChart = $(view).innerWidth() * 0.75 - marginChart.top - marginChart.bottom;
=======
	var showCharts = d3.selectAll("path")
		.on("click", function(d) {
			var list = '<li>' + d.properties.name + '</li>';
			document.getElementById('statelist').innerHTML = list;
			var id = getDBid(d.id);
			drawChart(id);
			drawParCoords(id);
			d3.selectAll("table")
			.style("visibility", "visible");
		});

	function drawChart(q) {

		var marginChart = {top: 50, right: 0, bottom: 30, left: 50};
		var widthChart = 620 - marginChart.left - marginChart.right;
		var heightChart = 400 - marginChart.top - marginChart.bottom;
>>>>>>> theosbornidentity/master

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


		var chart = d3.select(id);
		chart.selectAll("svg").remove();


		var svgChart = d3.select(id).append("svg")
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
				.style("fill", "1a331a")
				.call(yAxisChart)
			.append("text")
				.attr("transform", "rotate(-90)")
				.attr("y", 6)
				.attr("dy", ".71em")
				.style("text-anchor", "end")
				.style("fill", "#1a331a")
				.text("Average BTUs");

		var div = svgChart.append("div")   
    		.attr("class", "tooltip")               
    		.style("opacity", 0);

		var barFix = 0;
		svgChart.selectAll(".barData")
		      .data(averages)
		    .enter().append("rect")
		      .attr("class", "barData")
		      .attr("x", function(d) { return x(d); })
		      .attr("width", x.rangeBand())
		      .attr("y", function(d) { return y(d); })
		      .attr("transform", function(d) {
<<<<<<< HEAD
<<<<<<< HEAD
		      	var xVal = ((widthChart / 6) * barFix + 8);
		      	barFix++;
		      	return "translate(" + xVal + "," + 0 + ")" ; } )
		      .attr("height", function(d) { return heightChart - y(d); })
		      .style("fill", "#336633")
		      .text(function(d) { return d; })
		      .on("mouseover", function(d) {
		      	console.log(d);    
            	div.transition()        
                	.duration(200)      
                	.style("opacity", .9);      
            	div .html("Average BTUs: " + d)  
                	.style("left", (d3.event.pageX) + "px")     
                	.style("top", (d3.event.pageY - 28) + "px");    
            })                  
        	  .on("mouseout", function(d) {       
            	div.transition()        
                	.duration(500)      
                	.style("opacity", 0);   
        });
	}

	function drawScatterPlot(q, xaxis, yaxis, key, id, view) {

		var margin = {top: 50, right: 0, bottom: 30, left: 20},
			width = $(view).innerWidth()*1 - margin.left - margin.right,
		    height = $(view).innerWidth()*1 - margin.top - margin.bottom;

		var plot = d3.select(id);
		plot.selectAll("svg").remove();

		var svg = d3.select(id).append('svg')
        	.attr('width', width)
        	.attr('height', height);

        var dots = svg.append('g');

        // setup x 
        var xValue = function(d) { return parseInt(d[xaxis]);}, // data -> value
        xScale = d3.scale.linear().range([0, width]), // value -> display
        xMap = function(d) { return xScale(xValue(d));}, // data -> display
        xAxis = d3.svg.axis().scale(xScale).orient("bottom");

        // setup y
        var yValue = function(d) { return parseInt(d[yaxis]);}, // data -> value
        yScale = d3.scale.linear().range([height, 0]), // value -> display
        yMap = function(d) { return yScale(yValue(d));}, // data -> display
        yAxis = d3.svg.axis().scale(yScale).orient("left");

        // setup fill color
        var cValue = function(d) { return d[key];};

        // add the tooltip area to the webpage
        tooltip = svg.append("div")
            .attr("class", "tooltip")
            .style("opacity", 0);
        
        color = d3.scale.category10();

        var data = Data.find({domain: q}).fetch();
        console.log(data);

		// don't want dots overlapping axis, so add in buffer to domain
        xScale.domain([d3.min(data, xValue)-15, d3.max(data, xValue)+15]);
        yScale.domain([d3.min(data, yValue)-15, d3.max(data, yValue)+15]);

          // x-axis
        dots.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis)
          .append("text")
          .attr("class", "label")
          .attr("x", 10)
          .attr("y", 10)
          .style("text-anchor", "end")
          .text("heatBTU");

          // y-axis
        dots.append("g")
            .attr("class", "y axis")
            .call(yAxis)
            .append("text")
            .attr("class", "label")
            .attr("transform", "rotate(-90)")
            .attr("x", - 15)
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text("coolBTU");


          // draw dots
          dots.selectAll(".dot")
            .data(data)
            .enter().append("circle")
              .attr("class", "dot")
              .attr("r", 2) 
              .attr("cx", xMap)
              .attr("cy", yMap)
              .style("fill", function(d) { return color(cValue(d));}) 
              .on("mouseover", function(d) {
              	  console.log(d[key] + " " + d[xaxis] + " " + d[yaxis]);
                  tooltip.transition()
                       .duration(200)
                       .style("opacity", .9);
                  tooltip.html("Built Year Range: " + d[key] + "<br/> (" + "heatBTU: " + xValue(d) 
                  + ", coolBTU" + yValue(d) + ")")
                       .style("left", (d3.event.pageX + 5) + "px")
                       .style("top", (d3.event.pageY - 28) + "px");
              })
              .on("mouseout", function(d) {
                  tooltip.transition()
                       .duration(500)
                       .style("opacity", 0);
              });

          // draw legend
          var legend = dots.selectAll(".legend")
              .data(color.domain())
            .enter().append("g")
              .attr("class", "legend")
              .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

          // draw legend colored rectangles
          legend.append("rect")
              .attr("x", width - 50)
              .attr("y", height - 90)
              .attr("width", 18)
              .attr("height", 19)
              .style("fill", color);

          // draw legend text
          legend.append("text")
              .attr("x", width - 55)
              .attr("y", height - 80)
              .attr("dy", ".35em")
              .style("text-anchor", "end")
              .text(function(d) { return d;})

	}

	function drawParCoords(q, id, view) {

		var pcgraph = document.getElementById('pcchart1');

		var margin = {top: 50, right: 0, bottom: 30, left: 20},
		    width = $(view).innerWidth()*1 - margin.left - margin.right,
		    height = $(view).innerWidth()*0.75 - margin.top - margin.bottom;
=======
=======
>>>>>>> theosbornidentity/master
		      	var xVal = (92 * barFix + 12);
		      	barFix++;
		      	return "translate(" + xVal + "," + 0 + ")" ; } )
		      .attr("height", function(d) { return heightChart - y(d); })
		      .style("fill", "#333366");
	}

	function drawParCoords(q) {

		var pcgraph = document.getElementById('pcchart');

		var margin = {top: 50, right: 10, bottom: 30, left: 10},
		    width = 1200 - margin.left - margin.right,
		    height = 400 - margin.top - margin.bottom;
<<<<<<< HEAD
>>>>>>> theosbornidentity/master
=======
>>>>>>> theosbornidentity/master

		var x = d3.scale.ordinal().rangePoints([0, width], 1),
		    y = {};

		var line = d3.svg.line(),
		    axis = d3.svg.axis().orient("left"),
		    background,
		    foreground;
<<<<<<< HEAD
<<<<<<< HEAD

		var chart = d3.select(id);
		chart.selectAll("svg").remove();

		var svg = d3.select(id).append("svg")
=======

		var chart = d3.select(".parcoords");
		chart.selectAll("svg").remove();

		var svg = d3.select(pcgraph).append("svg")
>>>>>>> theosbornidentity/master
		    .attr("width", width + margin.left + margin.right)
		    .attr("height", height + margin.top + margin.bottom)
		  	.append("g")
		    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

		var dataset = Data.find({domain: q}).fetch();

		x.domain(dimensions = d3.keys(dataset[0]).filter(function(d) {
    		return (d == "heatBTU" || d == "coolBTU" || d == "waterBTU" || d == "refBTU" || d == "otherBTU" ) && (y[d] = d3.scale.linear()
       		.domain(d3.extent(dataset, function(p) { return +p[d]; }))
        	.range([height, 0]));
  			}));

		// Add grey background lines for context.
	  	background = svg.append("g")
	    	.attr("class", "background")
	    	.selectAll("path")
	      	.data(dataset)
	    	.enter().append("path")
	      	.attr("d", path);

	  	// Add blue foreground lines for focus.
	  	foreground = svg.append("g")
	      	.attr("class", "foreground")
	    	.selectAll("path")
	      	.data(dataset)
	    	.enter().append("path")
	      	.attr("d", path);
<<<<<<< HEAD

=======

		var chart = d3.select(".parcoords");
		chart.selectAll("svg").remove();

		var svg = d3.select(pcgraph).append("svg")
		    .attr("width", width + margin.left + margin.right)
		    .attr("height", height + margin.top + margin.bottom)
		  	.append("g")
		    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

		var dataset = Data.find({domain: q}).fetch();

		x.domain(dimensions = d3.keys(dataset[0]).filter(function(d) {
    		return (d == "heatBTU" || d == "coolBTU" || d == "waterBTU" || d == "refBTU" || d == "otherBTU" ) && (y[d] = d3.scale.linear()
       		.domain(d3.extent(dataset, function(p) { return +p[d]; }))
        	.range([height, 0]));
  			}));

		// Add grey background lines for context.
	  	background = svg.append("g")
	    	.attr("class", "background")
	    	.selectAll("path")
	      	.data(dataset)
	    	.enter().append("path")
	      	.attr("d", path);

	  	// Add blue foreground lines for focus.
	  	foreground = svg.append("g")
	      	.attr("class", "foreground")
	    	.selectAll("path")
	      	.data(dataset)
	    	.enter().append("path")
	      	.attr("d", path);

>>>>>>> theosbornidentity/master
=======

>>>>>>> theosbornidentity/master
	    // Add a group element for each dimension.
  		var g = svg.selectAll(".dimension")
      		.data(dimensions)
    		.enter().append("g")
      		.attr("class", "dimension")
      		.attr("transform", function(d) { return "translate(" + x(d) + ")"; });

      	// Add an axis and title.
		g.append("g")
		    .attr("class", "axis")
		    .each(function(d) { d3.select(this).call(axis.scale(y[d])); })
		    .append("text")
		      .style("text-anchor", "middle")
		      .attr("y", -9)
		      .text(function(d) { return d; });

		// Add and store a brush for each axis.
		g.append("g")
		    .attr("class", "brush")
		    .each(function(d) { d3.select(this).call(y[d].brush = d3.svg.brush().y(y[d]).on("brush", brush)); })
		    .selectAll("rect")
		    .attr("x", -8)
		    .attr("width", 16);

		// Returns the path for a given data point.
		function path(d) {
  			return line(dimensions.map(function(p) { return [x(p), y[p](d[p])]; }));
		}

		// Handles a brush event, toggling the display of foreground lines.
		function brush() {
  			var actives = dimensions.filter(function(p) { return !y[p].brush.empty(); }),
      		extents = actives.map(function(p) { return y[p].brush.extent(); });
  			foreground.style("display", function(d) {
    			return actives.every(function(p, i) {
      			return extents[i][0] <= d[p] && d[p] <= extents[i][1];
    			}) ? null : "none";
  			});
  		}
  	}
};
