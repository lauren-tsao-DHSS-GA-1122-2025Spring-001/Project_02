$(document).ready(function() {
    var $filterCheckboxes = $('input[type="checkbox"]');
  
    var filterFunc = function() {
      var selectedFilters = {};
  
      $filterCheckboxes.filter(':checked').each(function() {
        if (!selectedFilters.hasOwnProperty(this.name)) {
          selectedFilters[this.name] = [];
        }
        selectedFilters[this.name].push(this.value);
      });
  
      var $filteredResults = $('.magnet');
  
      $.each(selectedFilters, function(name, filterValues) {
        $filteredResults = $filteredResults.filter(function() {
          var matched = false,
              currentFilterValues = $(this).data('category').split(' ');
  
          $.each(currentFilterValues, function(_, currentFilterValue) {
            if ($.inArray(currentFilterValue, filterValues) !== -1) {
              matched = true;
              return false;
            }
          });
  
          return matched;
        });
      });
  
      // Show only the filtered results
      $filteredResults.show(); 
      // Hide non-matching results
      $('.magnet').not($filteredResults).hide(); 
    };
  
    // Attach the filter function to checkbox change event
    $filterCheckboxes.on('change', filterFunc);
  
    // Clear all checkboxes and reset filter
    function clearFilters() {
      $filterCheckboxes.prop('checked', false); // Uncheck all checkboxes
      filterFunc(); // Reapply the filter (this will show all magnets)
    }
  
    // Attach the clearFilters function to the "Clear all" button
    $(".clear-btn").on("click", clearFilters);
  });
  