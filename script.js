var tab = "about";

$( document ).ready(function() {

	$("div#about").fadeToggle();
	//$("div#about").css("display", "block");

	$("div#links a").click(function(element) {
		var id = $(this).attr('id');
		//alert(id);
	})

});