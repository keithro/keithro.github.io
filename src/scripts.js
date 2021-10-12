
// const scrollPage = (start, end) => {
//   console.log('you clicked the nav');
  
//   // if start === end exit function
// }


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

    // Get height and width of viewport
    let height = window.innerHeight;
    let width = window.innerWidth;
    console.log('Inner Window: ','h: ', height, 'w: ', width);
    

    let offset = $(e.target.hash).offset();
    let top = offset.top;
    let left = offset.left;
    console.log(`offset of ${e.target} (t, l): `, top, left);
    

    // if (start === end) do nothing
    if (start === end) return;
    
    // Move this into if statement below once you get it working.
    $('html, body').animate({
      // it looks like these run simulatnously so you will need to chain them.
      scrollLeft: left,
      scrollTop: top,
      // scrollTop: end.offset().top,
      // scrollLeft: end.offset().left,
    }, 500); // can you set speed and bezier curves in CSS?
    
    // else if...
    // Cases that would not go directly from start to end:
    // (start === 'home' && end === '#projects")
    // (start === 'home' && end === '#contact") // or should this go direct?
    // (start === 'about' && end === '#contact")
    // (start === 'projects' && end === '#home")

    // else
    // Go directly to end location

    // TODO:
    // Write one function that you can pass in location to move to. For two step moves (ex. home to Projects) run twice (left to right, top to bottom)
    // Or write four functions for end location (1, 2, 3, 4 or topLeft, topRight, bottomLeft, bottomRight)
    // Or could use an array ['home', 'about', 'projects', 'contact'];
    //  if siteMapArr.indexOf(start) === siteMapArr.indexOf(end) is positive > is === 1, === 2, === 3
  }
});
