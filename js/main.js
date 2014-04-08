$(document).ready(function() {
	// append a new list item to the list by taking the value of the user input when they click on the + button.
	$(".add").click(function(e) {
		var toAdd = $("input[class=main-input]").val();
		e.preventDefault();
		$("ul").append("<li class='items'><span class='fa-stack'><i class='checkbox fa fa-square-o fa-stack-1x'></i><i class='check fa fa-check fa-stack-1x'></i></span>"+toAdd+"<i class='delete fa fa-times'></i></li>");
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
		$(".clear").click(function(e) {
			$("ul").empty();
			e.preventDefault();
		});
});
// hide example list items
$(".items").hide();