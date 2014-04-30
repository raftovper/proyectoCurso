$(inicio);

function inicio() {

	//Creamos las variables para los horarios
	hours_index = 0;
	days = new Array("Mon - Fri", "Saturday", "Sunday");
	hours = new Array("07.00 - 19.30", "08.30 - 18.30", "09.00 - 14.30");

	//Establecemos los listener para el div de horarios
	$('#div_time').on("swipeleft", left);
	$('#div_time').on("swiperight", right);

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

function left() {
	if (hours_index > 0) {
		hours_index--;
		$("#div_time").fadeOut(300, function() {
			$("#timetable h5").html(days[hours_index]);
			$("#timetable p").html(hours[hours_index]);
			$("#div_time").fadeIn(300);
		});
	}
}

function right() {
	if (hours_index < 2) {
		hours_index++;
		$("#div_time").fadeOut(300, function() {
			$("#timetable h5").html(days[hours_index]);
			$("#timetable p").html(hours[hours_index]);
			$("#div_time").fadeIn(300);
		});
	}
}

/*** Funciones para el control del footer persistente ***/
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

/*** Listener para la libreria de fastclick ***/
window.addEventListener("load", function() {
	FastClick.attach(document.body);
});
