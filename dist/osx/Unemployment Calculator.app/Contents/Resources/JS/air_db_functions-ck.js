function DBConnector(){}air.trace("Functions Loaded");DBConnector.prototype.statement=new air.SQLStatement;DBConnector.prototype.conn=new air.SQLConnection;DBConnector.dbname="test.db";DBConnector.prototype.resHandler=function(e){var t=e.target.getResult().data[0];air.trace(t.observations);var n=JSON.parse(t.observations);$.event.trigger({type:"FRED",json:n,time:new Date})};DBConnector.prototype.queryByIds=function(e){this.statement.clearParameters();this.errHandler=function(e){air.trace("Error message:",event.error.message);air.trace("Details:",event.error.details)};var t="SELECT * FROM ser_data WHERE ser_data.ser_id = (SELECT series_id FROM ser_id WHERE g_id LIKE :g_id AND ed_id  LIKE :ed_id AND ar_id LIKE :ar_id)";this.statement.text=t;this.statement.parameters[":g_id"]=e.g;this.statement.parameters[":ed_id"]=e.ed;this.statement.parameters[":ar_id"]=e.ar;this.statement.addEventListener(air.SQLEvent.RESULT,this.resHandler,!1);this.statement.addEventListener(air.SQLErrorEvent.ERROR,this.errHandler,!1);this.statement.execute()};DBConnector.prototype.open=function(){this.statement.sqlConnection=this.conn;this.openHandler=function(e){air.trace("openHandler")};var e=air.File.applicationDirectory,t=e.resolvePath("test.db");this.conn.addEventListener(air.SQLEvent.OPEN,this.openHandler,!1);this.conn.openAsync(t)};