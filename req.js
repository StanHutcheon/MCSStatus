$(function() {
	$(document).ready(function() {
		var refresh = function() {
			$.ajax({
				url: "check/",
				cache: false,
				type: "GET",
				success: function(data) {
				    if(!data) {
				    	$("#onoroff").hide();
				    	$("#status").html("<span class=\"red\">Offline</span>");
				    }
				    if(data) {
				    	$("#onoroff").show();
					    $("#status").html("<span class=\"green\">" + data + "</span>");
				    }
				    setTimeout(function() {
	                    refresh();
	                }, 10000);
				}
			});
		};
		refresh();
	});
});