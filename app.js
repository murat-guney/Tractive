const slider = document.querySelector('.cards');
let infoTitle = document.querySelector(".infoTitle");
let mediaQueryList= window.matchMedia("(min-width: 1100px)");
let isDown = false;
let startX;
let scrollLeft;



slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', function (e) {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const move = (x - startX) * 2; 
    slider.scrollLeft = scrollLeft - move;
    console.log(move);
  });

  function screenTest(event) {
    if (event.matches) {
      /* the viewport is 1100 pixels wide or more */
      infoTitle.textContent = "You might find those interesting";
    } else {
      /* the viewport is less than 1100 pixels wide */
      infoTitle.textContent = "Complete your dog look";
      document.querySelector(".infoTitle").style.fontSize = "16pt";
    }
  }
  mediaQueryList.addEventListener("change", screenTest);