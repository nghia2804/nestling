Template.comparision.rendered = function() {

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
  //ct.clientHeight = ct.clientWidth * 0.75;
  //console.log(ct.clientWidth);
  //console.log(ct.clientHeight);

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
	  "200": "#709370", // 1-200
	  "400": "#5b845b", // 201 - 400
	  "600": "#477547", // 401 - 600
	  "over600": "#336633", // 601 - whatever
	  defaultFill: "#eef6ee" // 0
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
  var state2;
  var mode = 0;	// 0: single, 1: compare
  var chartmode = 0; // 0 = bar chart, 1: par char, 2: scatter plot
  var isState1Select = 0; // 0 = no , 1 = yes

 
  var selectedList = [];

  var renderSelectedList = function() {
  	$('#message').addClass('hidden');
  	var uniqueList = [];
  	var last = 5;
  	var tag = '<form>';
  	for (var i = selectedList.length -1; i >= 0 && last >= 0; i--) {
  		if (getDBid(selectedList[i].id) != -1) {
  			if (uniqueList.indexOf(selectedList[i].id) == -1) {
  				uniqueList.push(selectedList[i].id);
  				if (last == 5) {
  					document.getElementById('statename-label').innerHTML =  selectedList[i].properties.name;
  					tag += '<div><h3> Selected State: '+ selectedList[i].properties.name + '</h3></div>';
  					tag += '<div><h3>Select 2nd State for comparision:</h3></div>';
  				} else {
  					tag += '<div><input type="radio" name="state" data-index="' + getDBid(selectedList[i].id) + '" id="' + selectedList[i].id + '"><label for="' + selectedList[i].id + '">  ' + selectedList[i].properties.name + '</label></div>';	
  				}
  				last--;
  			}
  		}
   	}
  	tag += '</form>';
  	$('#list').html(tag);

	$('input[name="state"]').on('change', function() {
		console.log($(this).attr('data-index'));
		state2 = $(this).attr('data-index');
		mode = 1;
		document.getElementById('state2-label').innerHTML = $('label[for="' + $(this).attr('id') + '"]').html();
		renderLayout();
		renderCharts1(parseInt(state1));
		renderCharts2(parseInt(state2));
		renderChartCompare(parseInt(state1), parseInt(state2));
		renderDonutChart(parseInt(state1), parseInt(state2)); 
		renderDonutChartList();

	});
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

  var renderLayout = function () {
  	if (mode == 0) {
  		renderSingleLayout();
  		$('#statechart1-view').addClass('hidden');
  		$('#state1-view').css({'max-width': '50%'});
  		$('#state2-view').css({'max-width': '50%'});
  		$('#comparechart-view1').css({'max-width': '80%'});
  		$('#state2-view').addClass('hidden');
  		$('#compare-view').addClass('hidden');

  		$('#comparechart-view1').addClass('hidden');
  	} else if (mode == 1) {
  		$('#state1-view').css({'max-width': '50%'});
  		$('#state2-view').css({'max-width': '50%'});
  		$('#comparechart-view1').css({'max-width': '80%'});
  		$('#state1-view').removeClass('hidden');
  		$('#state2-view').removeClass('hidden');
  		$('#compare-view').removeClass('hidden');
  	}
  }
  renderLayout();

  var renderSingleChart = function(id){
  	if (chartmode == 0) {
  		drawChart(parseInt(state1), "#barchart", "#statechart1-view");
  	} else if (chartmode == 1) {
  		drawParCoords(parseInt(state1), "#pcchart", "#statechart2-view");
  	} else if (chartmode == 2) {
  		drawScatterPlot(parseInt(state1), "heatBTU", "coolBTU", "built" ,"#plotchart", "#statechart3-view") 
  	}
  }
  
  var renderCharts1 = function (id) {
  	if (mode == 0) {
  		drawChart(id, "#barchart1", "#state1-view");
  		drawParCoords(id, "#pcchart1", "#state1-view");
  		$('#barchart1').removeClass('hidden');
  	} else if (mode == 1) {
  		//drawChart(id, "#barchart1", "#state1-view");
		$('#barchart1').addClass('hidden');
		$('#pcchart1').addClass('hidden');
  	}
	d3.selectAll("table")
	.style("visibility", "visible");
  }

  var renderCharts2 = function (id) {
  	if (mode == 0) {
  		$('#barchart2').removeClass('hidden');

  	} else if (mode == 1) {
  		//drawChart(id, "#barchart2", "#state2-view");
  		$('#barchart2').addClass('hidden');
  	}
	d3.selectAll("table")
	.style("visibility", "visible");
  }

  var renderChartCompare = function (id1, id2) {
  	if (mode == 0) {

  	} else if (mode == 1) {
  		drawChartCompare( id1, id2,"#barchart-compare" ,"#comparechart-view1")
  	}
  }

  var renderDonutChart = function (id1, id2) {
  	if (mode == 0) {

  	} else if (mode == 1) {
  		//donutchart(id1, opt, "#donut-chart1", "#donutchart-view");
  		//donutchart(id2, opt, "#donut-chart2", "#donutchart-view");

  	}

  }

  var renderDonutChartList = function () {
  	var tag = '<form>';
  	tag += '<div> <input type="radio" name="donutoption" data-index="NHSLDMEM" id="NHSLDMEM"><label for="NHSLDMEM"> Number of Household</label> </div>';
  	tag += '<div> <input type="radio" name="donutoption" data-index="MONEYPY" id="MONEYPY"><label for="MONEYPY"> Gross Household Income (2009)</label> </div>';	
  	tag += '<div> <input type="radio" name="donutoption" data-index="TOTSQFT" id="TOTSQFT"><label for="TOTSQFT"> Total Square Footage</label> </div>';	
  	tag += '<div> <input type="radio" name="donutoption" data-index="YEARMADERANGE" id="YEARMADERANGE"><label for="YEARMADERANGE"> Built Year Range</label> </div>';	
  	tag += '<div> <input type="radio" name="donutoption" data-index="PROTHERM" id="PROTHERM"><label for="PROTHERM"> Has Smart Thermostat</label> </div>';		
  	tag += '</form>';
  	$('#donutlist').html(tag);
  	console.log("print donutlist");
  }

 

	var showCharts = d3.selectAll("path")
		.on("click", function(d) {
			mode = 0;
			state1 = getDBid(d.id);
			selectedList.push(d);
			renderSelectedList();
			console.log(selectedList);
			if (state1 != -1 ){
				isState1Select = 1;
				console.log("State1: " + parseInt(state1));
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


		var barFix = 0;
		svgChart.selectAll(".barData")
		      .data(averages)
		    .enter().append("rect")
		      .attr("class", "barData")
		      .attr("x", function(d) { return x(d); })
		      .attr("width", x.rangeBand())
		      .attr("y", function(d) { return y(d); })
		      .attr("transform", function(d) {
		      	var xVal = ((widthChart / 6) * barFix + 8);
		      	barFix++;
		      	return "translate(" + xVal + "," + 0 + ")" ; } )
		      .attr("height", function(d) { return heightChart - y(d); })
		      .style("fill", "#336633");
	}


	function drawChartCompare(q1, q2, id, view) {
		//console.log(q1);
		//console.log(q2);
		//console.log($(view).innerWidth());
		var marginChart = {top: 50, right: 0, bottom: 30, left: 20};
		var widthChart = $(view).innerWidth()*0.8 - marginChart.left - marginChart.right;
		var heightChart = $(view).innerWidth() * 0.5 - marginChart.top - marginChart.bottom;

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

		// State 1
		var btus = ["Heating \n BTUs", "Cooling \n BTUs", "Water \n BTUs", "Ref \n BTUs", "Other \n BTUs", "Total \n BTUs"];
		var resultsNum_1 = Data.find({domain: q1}).count();
		var heatBTUS_1 = 0;
		var coolBTUS_1 = 0;
		var waterBTUS_1 = 0;
		var refBTUS_1 = 0;
		var otherBTUS_1 = 0;
		var totalBTUS_1 = 0;
		var data1 = Data.find({domain: q1}).fetch();
		data1.forEach(function (d) {
			heatBTUS_1 += d["heatBTU"];
			coolBTUS_1 += d["coolBTU"];
			waterBTUS_1 += d["waterBTU"];
			refBTUS_1 += d["refBTU"];
			otherBTUS_1 += d["otherBTU"];
			totalBTUS_1 += d["totalBTU"];
		});
		var averages_1 = [heatBTUS_1 / resultsNum_1, coolBTUS_1 / resultsNum_1, waterBTUS_1 / resultsNum_1, refBTUS_1 / resultsNum_1, otherBTUS_1 / resultsNum_1, totalBTUS_1 / resultsNum_1];
		console.log(averages_1);

		// State 2
		var resultsNum_2 = Data.find({domain: q2}).count();
		var heatBTUS_2 = 0;
		var coolBTUS_2 = 0;
		var waterBTUS_2 = 0;
		var refBTUS_2 = 0;
		var otherBTUS_2 = 0;
		var totalBTUS_2 = 0;
		var data2 = Data.find({domain: q1}).fetch();
		data2.forEach(function (d) {
			heatBTUS_2 += d["heatBTU"];
			coolBTUS_2 += d["coolBTU"];
			waterBTUS_2 += d["waterBTU"];
			refBTUS_2 += d["refBTU"];
			otherBTUS_2 += d["otherBTU"];
			totalBTUS_2 += d["totalBTU"];
		});
		var averages_2 = [heatBTUS_2 / resultsNum_2, coolBTUS_2 / resultsNum_2, waterBTUS_2 / resultsNum_2, refBTUS_2 / resultsNum_2, otherBTUS_2 / resultsNum_2, totalBTUS_2 / resultsNum_2];
		console.log(averages_2);

		var averages = [ 	heatBTUS_1 / resultsNum_1, heatBTUS_2 / resultsNum_2, 
							coolBTUS_1 / resultsNum_1, coolBTUS_2 / resultsNum_2,
							waterBTUS_1 / resultsNum_1, waterBTUS_2 / resultsNum_2,
							refBTUS_1 / resultsNum_1, refBTUS_2 / resultsNum_2,
							otherBTUS_1 / resultsNum_1, otherBTUS_2 / resultsNum_2,
							totalBTUS_1 / resultsNum_1, totalBTUS_2 / resultsNum_2];

		color = d3.scale.category10();

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
				.attr("y", 12)
				.attr("dy", ".71em")
				.style("text-anchor", "end")
				.style("fill", "#1a331a")
				.text("Average BTUs");

		var barFix = 0;

		svgChart.selectAll(".barData")
			.data(averages)
		    .enter().append("rect")
		    .attr("class", "barData")
		    .attr("x", function(d) { return x(d); })
		    .attr("width", x.rangeBand()/2)
		    .attr("y", function(d) { return y(d); })
		    .attr("transform", function(d) {
		    	var xVal = ((widthChart / 12) * barFix + 5);
		      	barFix++;
		      	return "translate(" + xVal + "," + 0 + ")" ; } )
		    .attr("height", function(d) { return heightChart - y(d); })
		      //.style("fill", "#333366");
		    .style("fill", function(d) {
		      	var stateID = averages.indexOf(d) % 2;
		      	if (stateID == 0) {
		      		return "#310D20";
		      	}
		      	return "#0A2239";
		      });
	}

	//function donutchart(q, opt, id, view){}

	function drawScatterPlot(q, xaxis, yaxis, key, id, view) {

		var graph = document.getElementById('plotchart');
		var margin = {top: 50, right: 0, bottom: 30, left: 20},
			width = $(view).innerWidth()*1 - margin.left - margin.right,
		    height = $(view).innerWidth()*0.75 - margin.top - margin.bottom;

		var svg = d3.select(graph)
        	.append('svg')
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
        tooltip = d3.select("body").append("div")
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
          .attr("x", width - 20)
          .attr("y", -6)
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
              .attr("r", 3) 
              .attr("cx", xMap)
              .attr("cy", yMap)
              .style("fill", function(d) { return color(cValue(d));}) 
              .on("mouseover", function(d) {
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

	}

	function drawParCoords(q, id, view) {

		var pcgraph = document.getElementById('pcchart1');

		var margin = {top: 50, right: 0, bottom: 30, left: 20},
		    width = $(view).innerWidth()*1.2 - margin.left - margin.right,
		    height = $(view).innerWidth()*0.75 - margin.top - margin.bottom;

		var x = d3.scale.ordinal().rangePoints([0, width], 1),
		    y = {};

		var line = d3.svg.line(),
		    axis = d3.svg.axis().orient("left"),
		    background,
		    foreground;

		var chart = d3.select(id);
		chart.selectAll("svg").remove();

		var svg = d3.select(id).append("svg")
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
