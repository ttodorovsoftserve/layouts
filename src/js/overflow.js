'use strict';
$(document).ready(function() {
	$(window).resize(function() {

		var docs = $('.tabs-left .nav-tabs li,.tabs-left td,.tabs-left th');
		for (var i = 0; i < docs.length; i++) {
			if (docs[i].offsetHeight < docs[i].scrollHeight) {
				$(docs[i]).attr({
					'data-toggle': 'tooltip',
					'title': $(docs[i]).text()
				});
			}
		}
		$('[data-toggle="tooltip"]').tooltip();
	});

});