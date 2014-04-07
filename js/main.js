$(document).ready(function() {
	// append a new list item to the list by taking the value of the user input when they click on the + button.
	$(".add").click(function() {
		var toAdd = $("input[class=main-input]").val();
		$("ul").append("<li class='items'>"+toAdd+"</li>");
		event.preventDefault();
	});
});