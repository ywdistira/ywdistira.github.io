// Get the modal
var modal = document.getElementById("modal");

// Get the header
var header = document.querySelector("header");

// Get the image and video elements inside the modal
var modalImg = document.getElementById("modal-img");
var modalVideo = document.getElementById("modal-video");

// Get the title and description elements inside the modal
var modalTitle = document.querySelector(".modal-text h2");
var modalDescription = document.querySelector(".modal-text p");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Add event listener to all images in projects and gallery sections
var images = document.querySelectorAll("#projects img, #gallery img");
images.forEach(img => {
    img.addEventListener("click", function() {
        modal.style.display = "block";
        modalImg.style.display = "block";
        modalVideo.style.display = "none";
        modalImg.src = this.src;
        modalTitle.textContent = this.getAttribute("data-title");
        modalDescription.textContent = this.getAttribute("data-description");
        header.style.display = "none"; // Hide header
    });
});

// Add event listener to all videos in videos section
var videos = document.querySelectorAll("#videos video");
videos.forEach(video => {
    video.addEventListener("click", function() {
        modal.style.display = "block";
        modalImg.style.display = "none";
        modalVideo.style.display = "block";
        modalVideo.src = this.querySelector("source").src;
        modalTitle.textContent = this.getAttribute("data-title");
        modalDescription.textContent = this.getAttribute("data-description");
        header.style.display = "none"; // Hide header
    });
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    header.style.display = "block"; // Show header
};