/* Desktop links and a compact mobile navigation menu. */

var $nav = $('#site-nav');
var $btn = $('#site-nav button');
var $vlinks = $('#site-nav .visible-links');
var $hlinks = $('#site-nav .hidden-links');

// Matches the theme's $small breakpoint (600px, converted to ems).
var desktopNav = window.matchMedia('(min-width: 37.5em)');

function closeNav() {
  $hlinks.addClass('hidden');
  $btn.removeClass('close').attr('aria-expanded', 'false');
}

function updateNav() {
  closeNav();

  if (desktopNav.matches) {
    $hlinks.children().appendTo($vlinks);
    $btn.addClass('hidden');
  } else {
    $vlinks.children().slice(1).appendTo($hlinks);
    $btn.removeClass('hidden');
  }
}

if (desktopNav.addEventListener) {
  desktopNav.addEventListener('change', updateNav);
} else {
  desktopNav.addListener(updateNav);
}

$btn.on('click', function() {
  var expanded = $btn.attr('aria-expanded') === 'true';
  $hlinks.toggleClass('hidden', expanded);
  $btn.toggleClass('close', !expanded).attr('aria-expanded', String(!expanded));
});

$nav.on('keydown', function(event) {
  if ((event.key === 'Escape' || event.which === 27) && $btn.attr('aria-expanded') === 'true') {
    closeNav();
    $btn.trigger('focus');
  }
});

updateNav();
