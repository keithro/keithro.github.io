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
    // FIXME: try = e.target.closest('section').id
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

// HOME PAGE ANIMATION
$().ready(function () {
  console.log('animating...');

  // get height & width of .section-content-container

  // MOVE SHAPE TO RANDOM LOCATION
  $('.home-bg-shape').each(function(i) {
    console.log(i);
    console.log(this);
    console.log($(this));
    
    // get height & width of 'this' element
    // generate random top & left values
    // generate random rotate value
    // reposition 'this' within 0 - h/w of shape to container h/w + h/w of shape

    // = Math.ciel(Math.random * (contWidth + shapeWidth)

    $(this).css({
      'top': ${};
      'left': ${},
      'transform': 'rotate(' + degrees + 'deg)' });
    return $(this);
  });

  // ANIMATE SHAPE IN RANDOM DIRECTION
  $('.home-bg-shape').each(function(i) {
    console.log(i);

    // get height & width of element

    // generate random top & left values

    // animate this

    // Add listener for touching window?
  });
});

/*
// ------------------------------------------------------
// HOME PAGE ANIMATION
// window.onload or document.querySelector(window).addEventListener('onload')
// might need to use .load if below can't get window dimentions
$('.home-bg-shape').ready(function () {
  console.log('animating...');
  
  // get height and width of element
    
  // Move each to random start position? Or just keep them where they are now

  // animate to randome border edge
  $('.home-bg-shape').animate({
  // this.animate({
    // translate: ,// random direction
    // bottom: "180px",
    bottom: "+=100px",
    // rotate: "+=180",

  },{
    duration: 5000,
    easing: "linear",

  }); // can this be based on distance * ms so they all travel the same speed?

   // If it touches left or right edge reverse X direction;
   // If it touches top or bottom edge reverse Y direction
  //  Should it reverse direction if mouse < 50px?
})
*/
