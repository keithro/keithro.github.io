const scrollPage = (end) => {
  $('html, body').animate({
    scrollTop: $(end).offset().top,
    scrollLeft: $(end).offset().left,
  }, 500);
}

// SCROLL FROM NAV MENU
$('.nav-link').on('click', (e) => {
  if (e.target.hash !== '') {
    e.preventDefault();

    // Determine the current location (what section is currently displayed)
    const start = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.id;
    // Determine the desired destination (what link was clicked)
    const end = e.target.hash;

    if (start === 'home' && end === '#projects') {
      const midpoint = document.querySelector('#about-link').hash;
      scrollPage(midpoint);
    } else if (start === 'home' && end === '#contact') {
      const midpoint = document.querySelector('#about-link').hash;
      const midpoint2 = document.querySelector('#projects-link').hash;
      scrollPage(midpoint);
      scrollPage(midpoint2);
    } else if (start === 'about' && end === '#contact') {
      const midpoint = document.querySelector('#projects-link').hash;
      scrollPage(midpoint);
    } else if (start === 'projects' && end === '#home') {
      const midpoint = document.querySelector('#about-link').hash;
      scrollPage(midpoint);
    } else if (start === 'contact' && end === '#about') {
      const midpoint = document.querySelector('#projects-link').hash;
      scrollPage(midpoint);
    }
    scrollPage(end);

    window.location.hash = end; // Might need this to add nav location indicator
  }
});

// SCROLL FROM NAV ARROWS
$('.nav-arrow').on('click', (e) => {
  e.preventDefault();
  scrollPage(e.target.parentElement.hash);
});

// FIXME: Why didn't you add the class to ONE element and change CSS selectors
// TOGGLE OPEN/CLOSE MOBILE NAV MENU
$('.mobile-nav-btn').on('click', () => {
  $('.mobile-nav-background').toggleClass('open');
  $('.mobile-nav-list').toggleClass('open');
  $('.mobile-nav-btn-icon').toggleClass('open');
});

$('.mobile-nav-item').on('click', () => {
  $('.mobile-nav-background').removeClass('open');
  $('.mobile-nav-list').removeClass('open');
  $('.mobile-nav-btn-icon').removeClass('open');
});
