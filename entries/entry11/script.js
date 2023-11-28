
// drawing pad
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;
let prevX = 0;
    let prevY = 0;
let drawingTimeout;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', endDrawing);
canvas.addEventListener('mouseleave', endDrawing);

function startDrawing(e) {
      isDrawing = true;
      ctx.beginPath();
      ctx.moveTo(e.clientX, e.clientY);
    }

function draw(e) {
      if (!isDrawing) return;

      ctx.lineTo(e.clientX, e.clientY);
      ctx.strokeStyle = getRandomMacaronColor();
      ctx.lineWidth = 2;
      ctx.stroke();
    }

function endDrawing() {
      if (!isDrawing) return;

      isDrawing = false;
      clearTimeout(drawingTimeout);
      drawingTimeout = setTimeout(fadeOut, 4000);
    }

function fadeOut() {
    const fadeInterval = setInterval(function () {
    let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        for (let i = 3; i < imageData.data.length; i += 4) {
          if (imageData.data[i] > 0) {
            imageData.data[i] -= 5;
          }
        }
    ctx.putImageData(imageData, 0, 0);
        if (imageData.data.some(val => val > 0)) {
          return;
        }
    clearInterval(fadeInterval);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
      }, 30);
    }
    canvas.addEventListener('selectstart', function(e) {
        e.preventDefault();
      });

function getRandomMacaronColor() {
    const macaronColors = [
        '#F67280', '#C06C84', '#6C5B7B', '#355C7D', '#99B898', '#FECEAB', '#FF847C', '#E84A5F'
        // Add more colors from the Macaron palette if needed
    ];

    // Get a random index to select a color from the Macaron palette
    const randomIndex = Math.floor(Math.random() * macaronColors.length);

    // Return the randomly selected Macaron color
    return macaronColors[randomIndex];
}


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
