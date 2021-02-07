const leftArrow = document.querySelector('.fa-chevron-left');
const rightArrow = document.querySelector('.fa-chevron-right');
const imageContainer = document.querySelector('.image-container')
const images = Array.from(document.querySelectorAll('.image'));
const dotContainer = document.querySelector('.tracker-container');
const dots = Array.from(document.querySelectorAll('.tracker'));

const slideSize = images[0].getBoundingClientRect().width;
//arange slides next to each other


// for (let i = 0; i < images.length; i++) {
//    let size = (i * slideSize) + "px"
//    images[i].style.left = size;
// }

images.forEach((image, index) => image.style.left = slideSize * index + "px");



//when i click to right arrow move to next slide
function moveRight() {
   let currentSlide = document.querySelector('.current-slide')
   let nextSlide = currentSlide.nextElementSibling;
   if (nextSlide != null) {
      let currentIndex = images.findIndex(image => image === nextSlide);
      let currentDot = dotContainer.querySelector('.current-tracker')
      let targetDot = dots[currentIndex];
      currentDot.classList.remove('current-tracker');
      targetDot.classList.add('current-tracker');
      showHideArrows(currentIndex);
      let amountToMove = nextSlide.style.left
      imageContainer.style.transform = "translateX(-" + amountToMove + ")";
      currentSlide.classList.remove('current-slide');
      nextSlide.classList.add('current-slide');
   }
}

function moveLeft() {
   let currentSlide = document.querySelector('.current-slide');
   let prevSlide = currentSlide.previousElementSibling;
   if (prevSlide != null) {
      let currentIndex = images.findIndex(image => image === prevSlide);
      let currentDot = dotContainer.querySelector('.current-tracker')
      let targetDot = dots[currentIndex];
      currentDot.classList.remove('current-tracker');
      targetDot.classList.add('current-tracker');
      showHideArrows(currentIndex);
      let amountToMove = prevSlide.style.left;
      imageContainer.style.transform = "translateX(-" + amountToMove + ")";

      currentSlide.classList.remove('current-slide');
      prevSlide.classList.add('current-slide');
   }
}

function moveWithDots() {
   let target = event.target;
   if (target.classList[0] == 'tracker') {
      let targetIndex = dots.findIndex(dot => dot === target);
      let currentDot = dotContainer.querySelector('.current-tracker')
      let targetDot = dots[targetIndex];
      let currentSlide = imageContainer.querySelector('.current-slide');
      let targetSlide = images[targetIndex];


      currentDot.classList.remove('current-tracker');
      targetDot.classList.add('current-tracker');

      let amountToMove = targetSlide.style.left;
      imageContainer.style.transform = "translateX(-" + amountToMove + ")";

      currentSlide.classList.remove('current-slide');
      targetSlide.classList.add('current-slide');

      showHideArrows(targetIndex);
   }


}

function showHideArrows(index) {
   if (index == 0) {
      leftArrow.style.display = 'none';
      rightArrow.style.display = 'block';
   } else if (index == dots.length - 1) {
      leftArrow.style.display = 'block';
      rightArrow.style.display = 'none';
   } else {
      leftArrow.style.display = 'block';
      rightArrow.style.display = 'block';
   }
}

rightArrow.addEventListener('click', moveRight)
leftArrow.addEventListener('click', moveLeft)
dotContainer.addEventListener('click', moveWithDots);