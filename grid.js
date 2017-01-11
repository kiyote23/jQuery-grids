$(document).ready(function() {
	for (i = 0; i < 16; i++) {
		$(".container").append("<div class=\"row\">");
		for (x = 0; x < 16; x++) {
			$(".row").append("<div class=\"cell\"></div>");
		}
		$(".container").append("</div>");
	}
})