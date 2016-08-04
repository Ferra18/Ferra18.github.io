/*
	Twenty by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel.breakpoints({
		wide: '(max-width: 1680px)',
		normal: '(max-width: 1280px)',
		narrow: '(max-width: 980px)',
		narrower: '(max-width: 840px)',
		mobile: '(max-width: 736px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$header = $('#header'),
			$banner = $('#banner');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// CSS polyfills (IE<9).
			if (skel.vars.IEVersion < 9)
				$(':last-child').addClass('last-child');

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on narrower.
			skel.on('+narrower -narrower', function() {
				$.prioritize(
					'.important\\28 narrower\\29',
					skel.breakpoint('narrower').active
				);
			});

		// Scrolly links.
			$('.scrolly').scrolly({
				speed: 1000,
				offset: -10
			});

		// Dropdowns.
			$('#nav > ul').dropotron({
				mode: 'fade',
				noOpenerFade: true,
				expandMode: (skel.vars.touch ? 'click' : 'hover')
			});

		// Off-Canvas Navigation.

			// Navigation Button.
				$(
					'<div id="navButton">' +
						'<a href="#navPanel" class="toggle"></a>' +
					'</div>'
				)
					.appendTo($body);

			// Navigation Panel.
				$(
					'<div id="navPanel">' +
						'<nav>' +
							$('#nav').navList() +
						'</nav>' +
					'</div>'
				)
					.appendTo($body)
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'left',
						target: $body,
						visibleClass: 'navPanel-visible'
					});

			// Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#navButton, #navPanel, #page-wrapper')
						.css('transition', 'none');

		// Header.
		// If the header is using "alt" styling and #banner is present, use scrollwatch
		// to revert it back to normal styling once the user scrolls past the banner.
		// Note: This is disabled on mobile devices.
			if (!skel.vars.mobile
			&&	$header.hasClass('alt')
			&&	$banner.length > 0) {

				$window.on('load', function() {

					$banner.scrollwatch({
						delay:		0,
						range:		1,
						anchor:		'top',
						on:			function() { $header.addClass('alt reveal'); },
						off:		function() { $header.removeClass('alt'); }
					});

				});

			}

	});

    var text = ["La vita non si misura dai respiri <br />che facciamo ma dai momenti <br />che ci tolgono il respiro.", "Mani che servono <br /> sono più sante <br /> di labbra che parlano.", "La vera ricchezza non deriva <br />dall'abbondanza dei beni materiali <br />ma da una mente serena.", "L'importante non è quello che trovi <br />alla fine di una corsa, ma quello che <br />provi mentre corri.", "La vita e i sogni sono fogli di uno stesso libro:<br />leggerli in ordine è vivere, <br />sfogliarli a caso è sognare.", "Dimentica gli errori del passato, <br />i fallimenti, dimentica tutto eccetto <br/>ciò che devi fare ora, e fallo.", "Ieri è storia, domani è mistero, <br />ma oggi è un dono... <br />Per questo si chiama presente."];
    var counter = 1;
    setInterval(function() {
        $(document.getElementById("welcomeMessage")).fadeOut(500, function() {
            var $this = $(this);
            $this.html(text[counter]);
            counter++;
            if(counter >= text.length) { counter = 0; }
        //  $this.toggleClass('first second');
            $this.fadeIn(500);
        });
    }, 5000); /*TODO : Set time interval */

    $(function(){  /* TODO : Eliminare "effetto rimbalzo" dopo il cambio pagina*/

        /*
         Add this code to every page.

         We start by hiding the body, and then fading it in.
         */
        $('body').hide().fadeIn('slow');

        /*
         Now we deal with all 'a' tags...
         */
        $('a.effect').click(function(){
            /*
             Get the url from this anchors href
             */
            var link = $(this).attr('href');
            /*
             Fade out the whole page
             */
            $('body').fadeOut('slow', function(){
                /*
                 When that's done (on the 'callback') send the browser to the link.
                 */
                window.location.href = link;
            });
            return false;
        });

    });

})(jQuery);