let currentIndex = 0;
const images = document.querySelectorAll('.gallery-item');
const totalImages = images.length;
const gallery = document.querySelector('.gallery');
const galleryContainer = document.querySelector('gallery-container');
let autoScrollInterval;
function updateGallery() {
    const offset= -currentIndex * 100;
    gallery.style.transform = `translateX(${offset}%)`;
}
function nextImage(){
    if(currentIndex < totalImages -1){
        currentIndex++;
    } else{
        currentIndex = 0;
    }
    updateGallery();
    
}
function prevImage() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalImages - 1;
    }
    updateGallery();
}
document.getElementById('nextButton').addEventListener('click', nextImage);
document.getElementById('prevButton').addEventListener('click', prevImage);

document.addEventListener('wheel', (event) =>{
    if (event.deltaY > 0) {
        nextImage()
    } else{
        prevImage()
    }
});
function startAutoScroll() {
    autoScrollInterval = setInterval(() => {
        nextImage();
    }, 5000);
}
function stopAutoScroll(){
    clearInterval(autoScrollInterval);
}
startAutoScroll();
galleryContainer.addEventListener('mouseenter', () => {
    startAutoScroll();
})
galleryContainer.addEventListener('mouseleave', () => {
    startAutoScroll();
});
