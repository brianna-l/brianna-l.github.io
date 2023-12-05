const pages = document.querySelectorAll('.page');

    pages.forEach(page => {
      page.addEventListener('mouseover', function() {
        const randomColor = getRandomColor();
        page.style.backgroundColor = randomColor;
      });

      page.addEventListener('mouseout', function() {
        page.style.backgroundColor = '';
      });
    });

    // Function to generate random color
    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    // Function to generate viewport
    const popupBox = document.getElementById('popupBox');

    pages.forEach(page => {
      const heading = page.querySelector('h2');
      const content = page.querySelector('p');

      content.style.display = 'none'; // Hide <p> content initially

      page.addEventListener('mouseover', function(event) {
        popupBox.innerHTML = `<h2>${heading.textContent}</h2>${content.textContent ? `<p>${content.textContent}</p>` : ''}`;
        popupBox.style.display = 'block';
        const x = event.clientX;
        const y = event.clientY;
        popupBox.style.left = `${x + 15}px`;
        popupBox.style.top = `${y + 15}px`;
      });

      page.addEventListener('mouseout', function() {
        popupBox.style.display = 'none';
      });
    });



    function createDoodles() {
      const body = document.querySelector('body');

      for (let i = 0; i < 1500; i++) {
        const doodle = document.createElement('div');
        doodle.classList.add('doodle');
        doodle.style.backgroundColor = Math.random() > 0.5 ? '#000' : '#FFF'; // Random black or white color
        doodle.style.opacity = Math.random() * 0.1 + 0.2; // Random opacity between 0.2 and 1
        doodle.style.left = `${Math.random() * 100}vw`;
        doodle.style.top = `${Math.random() * 100}vh`;
        doodle.style.transform = `rotate(${Math.random() * 360}deg) scaleY(${Math.random() * 50 + 1})`; // Random rotation and length
        doodle.style.animationDuration = `${Math.random() * 20 + 1}s`; // Random animation duration
        body.appendChild(doodle);
      }
    }

    window.onload = createDoodles;