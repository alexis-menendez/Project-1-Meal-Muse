document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-button');
    
    if (toggleButton) {
      toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('tie-dye-dark');
           });
  
      // Initialize with light mode
     // document.body.classList.add('tie-dye-light');
   // } else {
      console.error('Toggle button not found');
    }
  });


  // light mode
  document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-light');
    
    if (toggleButton) {
      toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('tie-dye-light');
              });
  
 
    } else {
      console.error('Toggle button not found');
    }
  });


  // mood 1 - hunter
  document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('mood1-hunter');
    
    if (toggleButton) {
      toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('mood1-hunter');
              });
  
 
    } else {
      console.error('Toggle button not found');
    }
  });

  // mood 2 - Nick
  document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('mood2-nicholas');
    
    if (toggleButton) {
      toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('mood2-nicholas');
              });
  
 
    } else {
      console.error('Toggle button not found');
    }
  });
  
  // mood 3 Jameson
  document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('mood3-jameson');
    
    if (toggleButton) {
      toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('mood3-jameson');
              });
  
 
    } else {
      console.error('Toggle button not found');
    }
  });

    // mood 4 - alexis
    document.addEventListener('DOMContentLoaded', function() {
        const toggleButton = document.getElementById('mood4-alexis');
        
        if (toggleButton) {
          toggleButton.addEventListener('click', function() {
            document.body.classList.toggle('mood4-alexis');
                  });
      
     
        } else {
          console.error('Toggle button not found');
        }
      });