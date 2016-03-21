var d3 = require('d3');
	// width: (w/dataset.length) - barPadding, dynamic width for a bar 
	var margin = {top: 20, right: 30, bottom: 30, left: 40};

	var h = 250 - margin.top - margin.bottom;
	var w = 600 - margin.left - margin.right;
	
	var padding = 30;
	var barPadding = 30; 
	var textLabelPadding = 100;
			
	var dataset = [ 11, 15, 13, 19, 21];
	//yScale 
	var yScale = d3.scale.linear();
            yScale.domain([0, d3.max(dataset)]);
            yScale.range([10, 0]);
	// Creating SVG
	var svg = d3.select("body")
	            .append("svg")
	            .attr("width", w + margin.left + margin.right)
	            .attr("height", h + margin.top + margin.bottom)
	            .style('background', '#CCCCCC')
	            .append('g')
	            .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

	
	svg.selectAll('rect')
	   .data(dataset)
	   .enter()
	   .append('rect')
	   .attr({
	   	x: function(d, i) {return i* (w/dataset.length)/3; }, 
	   	y: function(d){ return h - (d*4); },
	   	width: ((w/dataset.length)/2 - barPadding),
	   	height: function(d) { return d*4;},
	   	fill: function(d) { return "rgb(" + ((d*10)%256)+ ",256, 0)";}
	   	});
	   // .append('g')
	   // .attr({
	   // 	fill: "none",
	   // 	stroke: "black",


	   // })


	// adding labels
	// original position for x coordinate
	//i*(w/dataset.length) + (w/dataset.length - textLabelPadding) / 2;
	svg.selectAll("text")
	   .data(dataset)
	   .enter()
	   .append("text")
	   .text(function(d) {
	   	return d;
	   })
	   .attr("x", function(d,i) {
	   		return (i*(w/dataset.length)/3) + 10;
	   	})
	   .attr("y", function(d) { 
	   		return  (h - (d*4) + 15)%h;
	   })
	   .attr("font-family", "sans-serif")
	   .attr("font-size", "11px")
	   .attr("fill", "red")
	   .attr("text-anchor", "middle");
	// Date 
	
	   // console.log(d3.time.format('%x'));
	   

    var yScale = d3.scale.linear()
              .domain([0, d3.max(dataset)])
              .range([h, 0]);

    var yAxis = d3.svg.axis()
                  .scale(yScale)
                  .orient('left')
                  .ticks(5);
    // create Y axis
    svg.append('g')
       .attr('class', 'y axis')
       .call(yAxis);

    svg.append('line')
       .attr("x1", 0)
       .attr("x2", w)
       .attr("y1", 0)
       .attr("y2",0)
       .attr("stroke-width", 1)
       .attr("stroke", "black");

    svg.append('line')
       .attr("x1", 0)
       .attr("x2", w)
       .attr("y1", h)
       .attr("y2", h)
       .attr("stroke-width", 1)
       .attr("stroke", "black");

    svg.append('line')
       .attr("x1", function(d,i) {
	   		return (4*(w/dataset.length)/3) + 40;})
       .attr("x2", function(d,i) {
	   		return (4*(w/dataset.length)/3) + 40;})
       .attr("y1", 0)
       .attr("y2", h)
       .attr("stroke-dasharray", [5, 5])
       .attr("stroke", "black");














