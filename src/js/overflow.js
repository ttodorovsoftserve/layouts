'use strict';
$(document).ready(function () {
    var showTooltip = function () {
    	var docs = $('.tabs-left .nav-tabs li a span,.tabs-left td,.tabs-left th');
    	$('[data-toggle="tooltip"]').tooltip('destroy');

        for (var i = 0; i < docs.length; i++) {

        	var delAtrs = ['title', 'data-toggle', 'data-trigger', 
        					'data-title', 'data-original-title'];
        	delAtrs.forEach(function(attribute){
        		$(docs[i]).removeAttr(attribute);
   	     	});
   
            if (docs[i].offsetWidth < docs[i].scrollWidth) {
                $(docs[i]).attr({
                    'data-toggle': 'tooltip',
                    'data-trigger': 'hover',
                    'data-container': 'body',
                    'data-title': $(docs[i]).text()
                });
            }
        }
        $('[data-toggle="tooltip"]').tooltip();
    };

    $(window).resize(function () {
        showTooltip();
    });
    $('.nav-tabs a[data-toggle="tab"]').on('shown.bs.tab', showTooltip);
    showTooltip();
});