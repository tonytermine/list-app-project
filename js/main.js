$(document).ready(function() {
	// enter a new list item by entering it into the input field and clicking on the + button.
	$(".add").click(function() {
		var toAdd = $("input[class=main-input]").val();
		$("ul").append("<li class='items'>"+toAdd+"</li>");
		event.preventDefault();
	});
});
