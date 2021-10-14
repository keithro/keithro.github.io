// On second thought, I don't think I need this outside the event handler. Scrolling still works with mobile nav.
const scrollPage = (end) => {
  $('html, body').animate({
    scrollTop: $(end).offset().top,
    scrollLeft: $(end).offset().left,
  }, 500);
}

// PAGE SCROLL
// =====================================
$('.nav-link').on('click', (e) => {
  // const scrollPage = (end) => {
  //   $('html, body').animate({
  //     scrollTop: $(end).offset().top,
  //     scrollLeft: $(end).offset().left,
  //   }, 500);
  // }

  if (e.target.hash !== '') {
    e.preventDefault();

    // Determine what is the current location (what section is displayed)
    const start = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.id;
    // Determine what is the desired destination (what link was clicked)
    const end = e.target.hash;

    if (start === 'home' && end === '#projects') {
      // const midpoint = $('#about-link'.hash)  // See if this will work w ".hash" inside the parenthesis
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
