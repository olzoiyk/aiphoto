// Get elements
const galleryImages = document.querySelectorAll('.gallery-grid img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

// Track current image index
let currentIndex = 0;

// Function to show image at specific index
function showImage(index) {
    // Make sure index is within bounds (loop around)
    if (index < 0) {
        currentIndex = galleryImages.length - 1;
    } else if (index >= galleryImages.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    // Get the image and display it in lightbox
    let fullImg = galleryImages[currentIndex].getAttribute('data-full');
    lightboxImg.src = fullImg || galleryImages[currentIndex].src;
}

// Add click event to each gallery image
galleryImages.forEach(function (img, index) {
    img.addEventListener('click', function () {
        // Show the lightbox
        lightbox.classList.add('active');

        // Show the clicked image
        showImage(index);
    });
});

// Previous button - only if it exists
if (prevBtn) {
    prevBtn.addEventListener('click', function () {
        showImage(currentIndex - 1);
    });
}

// Next button - only if it exists
if (nextBtn) {
    nextBtn.addEventListener('click', function () {
        showImage(currentIndex + 1);
    });
}

// Close lightbox when clicking X
if (closeBtn) {
    closeBtn.addEventListener('click', function () {
        lightbox.classList.remove('active');
    });
}

// Close lightbox when clicking outside the image
if (lightbox) {
    lightbox.addEventListener('click', function (e) {
        // Only close if clicked on the dark background, not the image
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });
}

// Keyboard navigation
document.addEventListener('keydown', function (e) {
    // Only work when lightbox is open
    if (lightbox && lightbox.classList.contains('active')) {
        if (e.key === 'ArrowLeft') {
            // Left arrow - previous image
            showImage(currentIndex - 1);
        } else if (e.key === 'ArrowRight') {
            // Right arrow - next image
            showImage(currentIndex + 1);
        } else if (e.key === 'Escape') {
            // Escape key - close lightbox
            lightbox.classList.remove('active');
        }
    }
});