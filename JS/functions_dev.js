

function air(){
	
}

air.trace = function(s){console.log(s)}

function DBConnector () {

}


DBConnector.prototype.open = function(){	air.trace("fake open");};
DBConnector.prototype.queryByIds = function( ids ){
	air.trace("fake query");
	
/*	$.each(obs_json,function(i,v){
			v.jsDate = new Date(v.date)
		}); */
	
	$.event.trigger({
				type: "FRED",
				observations: sample_data[ids["g"]],
				title: "Series Title Goes Here"
			});
};
