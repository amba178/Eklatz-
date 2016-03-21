
    var d3 = require('d3');
    var path = require('path');

    
    // var dataset = [ 25, 7, 5, 26, 11, 8, 25, 14, 
    //                 23, 19, 14, 11, 22, 29, 11, 
    //                 13, 12,17, 18, 10, 24, 18, 
    //                 25, 9, 3 ];

    // var dataset =[];
    // for (var i=0; i < 25; i++) {
    //   var newNumber = Math.floor(Math.random()*30);
    //   dataset.push(newNumber);
    // }
    // console.log(dataset);
    // d3.select("body").selectAll("div")
    //     .data(dataset)
    //     .enter()
    //     .append("div")
    //     .attr("class", "bar")
    //     .style("height", function(d) {
    //       var barHeight = d*5;
    //       return barHeight + "px";
    //     });
    // CIRCLE
    // var dataset = [5, 10, 15, 20, 25];

    // var w=500, h=50;
        
    // var svg = d3.select("body").append('svg');

    // svg.attr("width", w)
    //    .attr("height", h);
    // // To make it easy to reference all of the circles later
    // // we can create a new variable to store references to them all:
    // var circles = svg.selectAll("circle")
    //    .data(dataset)
    //    .enter()
    //    .append('circle');

    // circles.attr("cx", function(d, i) {
    //   return (i*50) + 25; 
    //        })
    //        .attr("cy", h/2)
    //        .attr("r", function(d){
    //         return d;
    //        } )
    //        .attr("fill", "yellow")
    //        .attr("stroke", "orange")
    //        .attr("stroke-width", function(d) {
    //          return d/2;
    //        });


  












    // d3.csv(path.join(__dirname, 'food.csv'), function(error, data) {
    //   if (error) {
    //     console.log(error);
    //   }else{
    //     console.log(data);
    //   }
    // });