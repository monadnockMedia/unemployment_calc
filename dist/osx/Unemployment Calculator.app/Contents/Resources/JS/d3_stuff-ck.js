var d3vars={},margin={top:20,right:20,bottom:30,left:50},width=640-margin.left-margin.right,height=480-margin.top-margin.bottom,scaleX=d3.scale.linear().range([0,width]),scaleY=d3.scale.linear().range([height,0]),xAxis=d3.svg.axis().scale(scaleX).orient("bottom"),yAxis=d3.svg.axis().scale(scaleY).orient("left"),line=d3.svg.line().x(function(e,t){return scaleX(Date(t))}).y(function(e){return scaleY(e.value)}),svgCon=d3.select("body").append("svg").attr({width:width,height:height}).append("g").attr("transform","translate("+margin.left+","+margin.top+")");scaleX.domain(d3.extent(obs_json,function(e,t){return t}));scaleY.domain(d3.extent(obs_json,function(e){return e.value}));svgCon.append("g").attr("class","x axis").attr("transform","translate(0,"+height+")").call(xAxis);svgCon.append("g").attr("class","y axis").call(yAxis).append("text").attr("transform","rotate(-90)").attr("y",6).attr("dy",".71em").style("text-anchor","end").text("Price ($)");svgCon.append("path").datum(obs_json).attr("class","line").attr("d",line);