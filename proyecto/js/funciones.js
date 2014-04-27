$(inicio);

function inicio() {
	
	//Obtenemos la altura del dispositivo para establecer el alto del mapa
	var mapHeight = $(window).height() * 0.65;
	
	$('#map_canvas').height(mapHeight);


	$('#map').on("pageshow", null, function() {
		$('#map_canvas').gmap('addMarker', {
			'position' : '37.392864, -5.988125',
			'bounds' : true
		}).click(function() {
			$('#map_canvas').gmap('openInfoWindow', {
				'content' : 'Hello World!'
			}, this);
		});
	});

}
/*
window.addEventListener("load", function() {
	FastClick.attach(document.body);
});
*/