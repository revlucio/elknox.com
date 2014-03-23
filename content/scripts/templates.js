$(function (){
	$.get( "/elknox.com/content/templates/header.html", function(data) {
	  $("#header").html(data);
	});
});