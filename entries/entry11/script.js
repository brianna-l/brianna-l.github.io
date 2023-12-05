



// change line color
function changeMacaronColors() {
    const lineItems = document.querySelectorAll('.line-item');
    
    const macaronPalette = [
      '#B8E0DC', 
      '#FFD3B5', 
      '#C7CEEA', 
      '#E9D8FD',
      '#ffb3ba',
      '#ffffba',
      '#bae1ff',
      // Add more colors from the macaron palette as needed
    ];
  
    lineItems.forEach((item) => {
      const lines = item.querySelectorAll('.line');
  
      setInterval(() => {
        const randomColor = macaronPalette[Math.floor(Math.random() * macaronPalette.length)];
        lines.forEach((line) => {
          line.style.backgroundColor = randomColor; // Change color of all lines within each .line-item to a random macaron color
        });
      }, 1000); // Change color every 1 second
    });
  }
  
    // Call the function to start changing colors after the page loads
  window.onload = function() {
    changeMacaronColors();
  };

// menu hover
const anchors = document.querySelectorAll('a.random-color');

anchors.forEach(anchor => {
    anchor.addEventListener('mouseover', () => {
      anchor.style.color = getRandomMacaronColor(); // Change color to a random color on hover
    });
  
    anchor.addEventListener('mouseout', () => {
      anchor.style.color = ''; // Reset color on mouseout (to default or initial)
    });
  });
  

//
function getRandomPosition() {
  return Math.random() * 100; // Random position from 0 to 100%
}

const rainbow = document.querySelector('.rainbow');

function animateRainbow() {
  const startPositionY = getRandomPosition();
  
  rainbow.style.top = `${-10 - startPositionY}%`; // Adjusting the starting position vertically
}

animateRainbow(); // Initial animation start

//
const sparklesContainer = document.getElementById('sparkles-container');

function createSparkle() {
  const sparkle = document.createElement('div');
  sparkle.classList.add('sparkle');

  const randomX = Math.random() * window.innerWidth;
  sparkle.style.left = `${randomX}px`;

  sparklesContainer.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 5000); // Adjust the time sparkles stay on the screen (milliseconds)
}

setInterval(createSparkle, 300); // Adjust the interval for creating new sparkles (milliseconds)
