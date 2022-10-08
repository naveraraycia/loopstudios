// Grab Hamburger Button
const btn = document.getElementById('menu-btn');

// Mobile Nav Menu
const menu = document.getElementById('menu');

// Listen to click
btn.addEventListener('click', () => {
  // If menu icon is clicked, add the 'open' and 'flex' class
  btn.classList.toggle('open');
  menu.classList.toggle('flex'); // by default we don't have 'flex', so this will be added
  menu.classList.toggle('hidden'); // by default we have 'hidden', so this will be removed
} );