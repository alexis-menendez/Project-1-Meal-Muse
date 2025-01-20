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
    
      // Function to add video background - Alexis
      document.addEventListener('DOMContentLoaded', function() {
        function addVideoBackground(videoSrc) {
            let existingVideo = document.getElementById('video-background');
            
            // Remove existing video if already present
            if (existingVideo) {
                existingVideo.remove();
            }
    
            // Create new video element
            const videoElement = document.createElement('video');
            videoElement.id = 'video-background';
            videoElement.src = videoSrc;
            videoElement.autoplay = true;
            videoElement.loop = true;
            videoElement.muted = true;
            videoElement.style.position = 'fixed';
            videoElement.style.top = '0';
            videoElement.style.left = '0';
            videoElement.style.width = '100%';
            videoElement.style.height = '100%';
            videoElement.style.objectFit = 'cover';
            videoElement.style.zIndex = '-1';
    
            document.body.appendChild(videoElement);
        }
    
        // Tie Dye Animation
        const tiedyeButton = document.getElementById('mood5-tiedyeanimation');
        if (tiedyeButton) {
            tiedyeButton.addEventListener('click', function() {
                document.body.classList.toggle('mood5-tiedyeanimation');
                addVideoBackground('assets/images/toggle/animations/tiedyeanimation.mov');
            });
        } else {
            console.error('Tie Dye Animation button not found');
        }
    
        // Space Animation
        const spaceButton = document.getElementById('mood6-spceanimation');
        if (spaceButton) {
            spaceButton.addEventListener('click', function() {
                document.body.classList.toggle('mood6-spaceanimation');
                addVideoBackground('assets/images/toggle/animations/spaceanimation.mov');
            });
        } else {
            console.error('Space Animation button not found');
        }
        });

          // Animation lOOP (trying to get rid of black flicker at the end of the video but can't seem to figure it out?! - Alexis)
        document.addEventListener('DOMContentLoaded', () => {
        const videos = document.querySelectorAll('.video-loop'); // Target videos with the class "video-loop"
  
        videos.forEach(video => {
            video.addEventListener('ended', function () {
                if (!video.reversed) {
                  video.playbackRate = -1; // Reverse playback
                  video.currentTime = video.duration; // Start from end
                } else {
                  video.playbackRate = 1;  // Forward playback
                  video.currentTime = 0;   // Start from beginning
                }
                  video.reversed = !video.reversed; // Toggle direction
                video.play();
           });
  
            video.reversed = false; // Initialize reverse flag
            video.play();
           });
        });