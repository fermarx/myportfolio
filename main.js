// Get all the tabs
const tabs = document.querySelectorAll('.tab');

// Get all the navigation menu items
const menuItems = document.querySelectorAll('nav ul li');

// Add event listeners to the navigation menu items
menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', () => {
    // Remove the active class from all navigation menu items
    menuItems.forEach((item) => {
      item.classList.remove('active');
    });

    // Add the active class to the clicked navigation menu item
    menuItem.classList.add('active');

    // Hide all tabs
    tabs.forEach((tab) => {
      tab.classList.remove('active');
    });

    // Show the corresponding tab
    const tabId = menuItem.querySelector('a').getAttribute('href');
    const tab = document.querySelector(tabId);
    tab.classList.add('active');
  });
});
