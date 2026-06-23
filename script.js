document.addEventListener('DOMContentLoaded', () => {
  const bloomBtn = document.getElementById('bloom-btn');
  const flowerContainer = document.getElementById('flower-container');
  const textContainer = document.querySelector('.text-container');

  bloomBtn.addEventListener('click', () => {
    // Hide the button smoothly
    bloomBtn.style.opacity = '0';
    bloomBtn.style.pointerEvents = 'none';
    
    setTimeout(() => {
      bloomBtn.style.display = 'none';
    }, 500);

    // Trigger the flower bloom animation
    flowerContainer.classList.add('bloom');

    // Show the romantic text after the flower has bloomed
    textContainer.classList.add('show');
  });
});