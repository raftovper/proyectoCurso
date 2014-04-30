$(document).one('pagecreate', function() {

	// animation speed;
	var animationSpeed = 300;

	function animateCollapsibleSet(elm) {

		// can attach events only one time, otherwise we create infinity loop;
		elm.one('collapsibleexpand', function() {

			// hide the other collapsibles first;
			$(this).parent().find('.ui-collapsible-content').not('.ui-collapsible-content-collapsed').trigger('collapsiblecollapse');

			// animate show on collapsible;
			$(this).find('.ui-collapsible-content').slideDown(animationSpeed, function() {

				// trigger original event and attach the animation again;
				animateCollapsibleSet($(this).parent().trigger('collapsibleexpand'));
			});

			// we do our own call to the original event;
			return false;
		}).one('collapsiblecollapse', function() {

			// animate hide on collapsible;
			$(this).find('.ui-collapsible-content').slideUp(animationSpeed, function() {

				// trigger original event;
				$(this).parent().trigger('collapsiblecollapse');
			});

			// we do our own call to the original event;
			return false;
		});
	}

	// init;
	animateCollapsibleSet($('[data-role="collapsible-set"] > [data-role="collapsible"]'));
}); 