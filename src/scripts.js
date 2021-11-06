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

// FIXME: Why don't you add the class to ONE element and change CSS selectors
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

/*

// HOME PAGE ANIMATION
$().ready(function () {
  // get height & width of .section-content-container
  const container = $('.section-content-container');
  let containerWidth = container.width();
  let containerHeight = container.height();
  console.log('Window height/width');
  console.log('H: ', containerHeight, 'W: ', containerWidth);
  
  // let containerInnerWidth = container.innerWidth();
  // let containerInnerHeight = container.innerHeight();
  // console.log('Window innerHeight/innerWidth');
  // console.log('H: ', containerInnerHeight, 'W: ', containerInnerWidth); // same values as .height()/.width()
  

  // MOVE SHAPE TO RANDOM LOCATION
  $('.home-bg-item').each(function(i) {
    console.log('index: ',i);
    // console.log($(this));
    
    // Get height & width of 'this' element within 0 - h/w of shape to container h/w + h/w of shape
    const bgItemHeight = $(this).outerHeight();
    const bgItemWidth = $(this).outerWidth();
    console.log('bgItem H/W', bgItemHeight, bgItemWidth);
    

    // Generate random top & left values
    const y = Math.round(Math.random() * (containerHeight + bgItemHeight * 2)) - bgItemHeight;
    const x = Math.round(Math.random() * (containerWidth + bgItemWidth * 2)) - bgItemWidth;
    console.log('x: ', x,'y: ', y);
    
    // Generate random rotate value
    const d = Math.round(Math.random() * 180);
    console.log('d: ', d);
    
    // Reposition item
    $(this).css({
      'top': `${y}px`, // pass in string with "px"?
      'left': `${x}px`,
      'transform': `rotate(${d}deg)`,
    });
    // return $(this);
    console.log($(this));
  });

  // ANIMATE SHAPE IN RANDOM DIRECTION (see notes below)
  $('.home-bg-item').each(function(i) {

    // animate "this"
    $(this).animate({
      'top': '+=300px',
      'left': '+=50px',
      'transform': `rotate(+=180deg)`, // TODO: first check if >= 180
    }, {
      duration: 5000, // can this be based on distance * ms so they all travel the same speed?
      easing: "linear",

    });

    // Add listener for touching window?  OR 'done' function should place starting position along container edge +/- 20px

  });
});

// REFACTOR ABOVE INTO SEPARATE FUNCTION AND CALL AGAIN ON WINDOW RESIZE
    // get height & width of element
    // generate random top & left values


    // OTHER IDEAS FOR HOME BG ANIMATION
   // If it touches left or right edge reverse X direction;
   // If it touches top or bottom edge reverse Y direction
  //  Should it reverse direction if mouse < 50px?

  */
