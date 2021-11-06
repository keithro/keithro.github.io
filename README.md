# Project Overview

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description / Wireframes | Complete
|Day 1| Priority Matrix / Timeline | Complete
|Day 2| Basic Layout | Complete
|Day 2| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 3| Animations / API Implementation | Incomplete
|Day 4| MVP & Bug Fixes | Complete
|Day 5| Final Touches | Complete
|Day 6| Present | Incomplete


## Functional Components

- Switch from mobile pop-open style menu for mobile to regular menu for desktop
- Desktop nav will need to scroll right, down, left, up to the correct section on page and have an indicator to show what page you are on.
- Scrolling with mouse wheel (and track pad?) will also scroll in correct order (right, down, left)
- Layout will need to change for different screen sizes
- Project section will have CSS hover animations
- Contact sectil will have email and social media links and email form if time allows
- Home page will have interactive floating decorations and/or SVG animation.

## Project Description

Design, plan and build a portfolio website. The site will use Javascript/jQuery to move from section to section, to make AJAX call to a third-party API and to make interactive animations  on the site. It will feature completed projects, an about me sections and a contact section (hopefully) with an "email me" form.

## Wireframes
[Project wireframe](img/project_wireframe.JPG)

## Time/Priority Matrix 

#### MVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Project Previews & design inspiration | H | 4hr | 4+hr |
| Project Worksheet | H | 1hr | 2+hr |
| Desktop Nav | H | 1hr | 1hr ]
| Nav links move to proper section with jQuery | H | 2hr |  6hr |
| Hamburger/mobile Nav | H | 2hr | 4hr |
| Open/close mobile Nav & animations | H | 2hr | 4hr |
| Working with API | H | 1.5hrs|  hr | 
| Responsive | H | 3hr | 5hr |
| Home, About, Project and Contact Sections  | H | 2hr | 8hr |  
| Social Media Icons/links | H | 1hr |  1hr |
| Design & Make Favicon | L | 1.5hr |  hr |
| Total | H | 20hrs| 35+hrs |

#### PostMVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Logo or welcome message SVG animation | L | 3hr | hr |
| Floating shape decorations on home page + interact with mouse | H | 3hr | hr |
| Floating Tech Icons | L | 2hr | hr |
| Hamberger to "X" icon transformation | L | 2hr | 1hr |
| Project Modals  | L | 2hr | hr |  
| Mouse scroll (correct order: right, down, left) | L | 3hr | hr |
| Email Form | L | 3hr | hr |
| Total | H | 17hrs| hrs |



## Additional Libraries
  + jQuery
  + Is Sass considered a library? 

## Code Snippet


## Issues and Resolutions
* Relative and fixed position elements were showing when mobile navigation menu was open or blocking it from opening/showing completley even though the z-index was set to 100+. When I changed the z-index of other elements to "-1" those elements would no longer interact with the mouse or be clickable (links for example). I have to move the mobile navigation HTML to the bottom of the body.

* Coloring SVGs => Hade to change to <svg> elemenet + "<use>"

* Gradient over bg image would not work => Needed to use "&nbsp;" with an empty div.


