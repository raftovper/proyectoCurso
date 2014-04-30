$(inicio);

function inicio() {

	//Obtenemos la altura del dispositivo para establecer el alto del mapa
	var mapHeight = $(window).height() * 0.65;

	$('#map_canvas').height(mapHeight);

	$('#map').on("pageshow", null, function() {
		$('#map_canvas').gmap('addMarker', {
			'position' : '37.3840919,-5.9937499',
			'bounds' : true
		}).click(function() {
			$('#map_canvas').gmap('openInfoWindow', {
				'content' : '<img src="res/img/logo.png" width="100px;">'
			}, this);
		});
	});

}

$(function() {
	$("[data-role='navbar']").navbar();
	$("[data-role='header'], [data-role='footer']").toolbar({
		theme : "d"
	});
});
// Update the contents of the toolbars
$(document).on("pageshow", "[data-role='page']", function() {
	// Each of the four pages in this demo has a data-title attribute
	// which value is equal to the text of the nav button
	// For example, on first page: <div data-role="page" data-title="Info">
	var current = $(this).jqmData("title");
	// Change the heading
	//$("[data-role='header'] h1").text(current);
	// Remove active class from nav buttons
	$("[data-role='navbar'] a.ui-btn-active").removeClass("ui-btn-active");
	// Add active class to current nav button
	$("[data-role='navbar'] a").each(function() {
		if ($(this).text() === current) {
			$(this).addClass("ui-btn-active");
		}
	});
});


 window.addEventListener("load", function() {
 FastClick.attach(document.body);
 });
 