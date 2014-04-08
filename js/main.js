$(document).ready(function() {
	// append a new list item to the list by taking the value of the user input when they click on the + button. Have an alert pop up if user does not enter anything in the input field.
	$(".add").click(function(e) {
		var toAdd = $("input").val();
		if (toAdd == 0) {
		alert("Please, enter text to add to your list!");
		return false;
		} else {
		$("ul").append("<li class='items'><span class='fa-stack'><i class='checkbox fa fa-square-o fa-stack-1x'></i><i class='check fa fa-check fa-stack-1x'></i></span>"+toAdd+"<i class='delete fa fa-times'></i></li>");
		}
		e.preventDefault();
		// clear input bar after entering an item
		$("form")[0].reset();
	});
	//show delete button on mouse hover
		$("ul").on("mouseenter", "li", function() {
			$(this).find(".delete").toggle();
		});
		$("ul").on("mouseleave", "li", function() {
			$(this).find(".delete").toggle();
		});
	//delete list items by clicking the x
		$("ul").on("click", ".delete", function(e) {
			e.preventDefault();
			$(this).parent().remove();
		});
	//check the box and cross off list items
		$("ul").on("click", "li", function() {
			$(this).toggleClass("completed");
			$(this).find(".check").toggle();
		});
	//sort list items by dragging with mouse.
		$("ul").sortable({ axis: "y" });
	// clear entire list by clicking clear button
		$(".reset").click(function(e) {
			$("ul").empty();
			e.preventDefault();
		});
});
// hide example list items
$(".items").hide();