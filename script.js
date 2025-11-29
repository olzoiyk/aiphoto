// Get elements
const galleryImages = document.querySelectorAll('.gallery-grid img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

// Add click event to each image
galleryImages.forEach(function (img) {
    img.addEventListener('click', function () {

        //Show the lightbox
        lightbox.classList.add('active');

        //Set the big image to be the same as the clicked image
        //lightboxImg.src = img.src;

        //Replace 400/300 with 1200/800 for bigger image
        let bigImageUrl = img.src.replace('/400/300', '/1200/800')
        lightboxImg.src = bigImageUrl;
    });
});

//Close lightbox

closeBtn.addEventListener('click', function () {
    //Hide the lightbox
    lightbox.classList.remove('active');
});

//Close lightbox when clicking outside the image
lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
    }
});