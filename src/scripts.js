
/*
$('.nav-link').on('click', (e) => {
  // console.log(this);
  // console.log($(this));
  // console.log(e);
  // console.log($(e));

  if(e.target.hash !== '') {
    e.preventDefault();
    
    // Determine what is the current location (what section is displayed)
    const start = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.id;
    console.log('current location: ', start);
    
    // Determine what is the desired destination (what link was clicked)
    const end = e.target.hash; // might need to get rid of hash symbol
    console.log('desired destination', end);

    // // Get height and width of viewport
    // let height = window.innerHeight;
    // let width = window.innerWidth;
    // console.log('Inner Window: ','h: ', height, 'w: ', width);
    
    
    // // Get target location
    // let offset = $(e.target.hash).offset();
    // let top = offset.top;
    // let left = offset.left;
    // console.log(`offset of ${e.target} (t, l): `, top, left);
    

    // I don't think I need this. Page will not move anyway
    // if (start === end) return;
    
    // Move this into if statement below once you get it working.
    $('html, body').animate({
      // it looks like these run simulatnously so you will need to chain function calls.
      // scrollLeft: left,
      // scrollTop: top,
      scrollTop: $(end).offset().top,
      scrollLeft: $(end).offset().left,
    }, 500); // can you set speed and bezier curves in CSS?
    
    // else if...
    // Cases that would not go directly from start to end:
    if (start === 'home' && end === '#projects') {
      console.log("hey you can't go that way!!!");

      // Does not work with jQuery
      // const $midpoint = $('#about-link').hash;
      // console.log($midpoint);
    } else if (start === 'home' && end === '#contact') {
      console.log("hey you can't go that way!!!");
      
    } else if (start === 'about' && end === '#contact') {
      console.log("hey you can't go that way!!!");
      
    } else if (start === 'projects' && end === '#home') {
      console.log("hey you can't go that way!!!");
      
    } else if (start === 'contact' && end === '#about') {
      console.log("hey you can't go that way!!!");
      
    } else {
      console.log('You are flying direct!!!');
      
    }

    // else
    // Go directly to end location

    // TODO:
    // Write one function that you can pass in location to move to. For two step moves (ex. home to Projects) run twice (left to right, top to bottom)
    // Or write four functions for end location (1, 2, 3, 4 or topLeft, topRight, bottomLeft, bottomRight)
    // Or could use an array ['home', 'about', 'projects', 'contact'];
    //  if siteMapArr.indexOf(start) === siteMapArr.indexOf(end) is positive > is === 1, === 2, === 3
  }
});
*/

// Refactor
// =====================================
$('.nav-link').on('click', (e) => {
  const scrollPage = (end) => {
    $('html, body').animate({
      scrollTop: $(end).offset().top,
      scrollLeft: $(end).offset().left,
    }, 500);
  }

  if (e.target.hash !== '') {
    e.preventDefault();

    // Determine what is the current location (what section is displayed)
    const start = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.id;
    console.log('current location: ', start);

    // Determine what is the desired destination (what link was clicked)
    const end = e.target.hash; // might need to get rid of hash symbol
    console.log('desired destination', end);

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
    // if (start === 'home' && end === '#projects') {
    //   const midpoint = document.querySelector('#about-link').hash;
    //   scrollPage(midpoint);
    //   scrollPage(end);
    // } else if (start === 'home' && end === '#contact') {
    //   const midpoint = document.querySelector('#about-link').hash;
    //   const midpoint2 = document.querySelector('#projects-link').hash;
    //   scrollPage(midpoint);
    //   scrollPage(midpoint2);
    //   scrollPage(end);
    // } else if (start === 'about' && end === '#contact') {
    //   const midpoint = document.querySelector('#projects-link').hash;
    //   scrollPage(midpoint);
    //   scrollPage(end);
    // } else if (start === 'projects' && end === '#home') {
    //   const midpoint = document.querySelector('#about-link').hash;
    //   scrollPage(midpoint);
    //   scrollPage(end);
    // } else if (start === 'contact' && end === '#about') {
    //   const midpoint = document.querySelector('#projects-link').hash;
    //   scrollPage(midpoint);
    //   scrollPage(end);
    // } else {
    //   scrollPage(end);
    // }
  }
});
