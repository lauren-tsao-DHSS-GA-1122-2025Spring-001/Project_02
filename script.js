function filterSelection() {
    var magnets, i;
    var filters = [];
  
    // Collect all checked checkboxes
    const checkboxes = document.querySelectorAll('.btn:checked');
    
    // Add the value of checked checkboxes to the filters array
    checkboxes.forEach(checkbox => {
      filters.push(checkbox.id);
    });
  
    // Get all elements with the class "filterDiv"
    magnets = document.getElementsByClassName("filterDiv");
  
    // If no checkboxes are checked, show all items
    if (filters.length === 0 || filters.includes("all")) {
      filters = []; // Reset filters if "Show all" is checked or none are selected
    }
  
    // Loop through all filterDiv elements and show/hide them based on the filters
    for (i = 0; i < magnets.length; i++) {
      const magnet = magnets[i];
      const magnetClasses = magnet.className.split(' ');
  
      // Check if the magnet has any of the selected filters
      const matchesFilter = filters.length === 0 || filters.some(filter => magnetClasses.includes(filter));
  
      if (matchesFilter) {
        magnet.classList.remove("hide");
      } else {
        magnet.classList.add("hide");
      }
    }
  }
  
  // Add event listener to each checkbox to trigger the filtering when the state changes
  document.querySelectorAll('.btn').forEach((checkbox) => {
    checkbox.addEventListener('change', filterSelection);
  });
  