function air(){}function DBConnector(){}air.trace=function(e){console.log(e)};DBConnector.prototype.open=function(){air.trace("fake open")};DBConnector.prototype.queryByIds=function(e){air.trace("fake query");$.event.trigger({type:"FRED",observations:sample_data[e.g],title:"Series Title Goes Here"})};