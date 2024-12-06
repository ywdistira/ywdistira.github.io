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

// Get the navigation buttons
var prevBtn = document.getElementById("prev");
var nextBtn = document.getElementById("next");

// Store the current index and section of the modal content
var currentIndex = 0;
var currentSection = "";

// Function to open the modal with specific content
function openModal(content, index, section) {
    modal.style.display = "block";
    prevBtn.hidden = false;
    nextBtn.hidden = false;
    if (content.tagName === "IMG") {
        modalImg.style.display = "block";
        modalVideo.style.display = "none";
        modalImg.src = content.src;
    } else if (content.tagName === "VIDEO") {
        modalImg.style.display = "none";
        modalVideo.style.display = "block";
        modalVideo.src = content.querySelector("source").src;
    }
    modalTitle.textContent = content.getAttribute("data-title");
    modalDescription.textContent = content.getAttribute("data-description");
    header.style.display = "none"; // Hide header
    currentIndex = index;
    currentSection = section;
}

// Add event listener to all images in projects and gallery sections
var images = document.querySelectorAll("#projects img, #gallery img");
images.forEach((img, index) => {
    img.addEventListener("click", function() {
        openModal(this, index, img.closest("section").id);
    });
});

// Add event listener to all videos in videos section
var videos = document.querySelectorAll("#videos video");
videos.forEach((video, index) => {
    video.addEventListener("click", function() {
        openModal(this, index, video.closest("section").id);
    });
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    prevBtn.hidden = true;
    nextBtn.hidden = true;
    header.style.display = "block"; // Show header
};

// Function to navigate to the previous content within the same section
function showPrev() {
    var contents = document.querySelectorAll(`#${currentSection} img, #${currentSection} video`);
    currentIndex = (currentIndex - 1 + contents.length) % contents.length;
    openModal(contents[currentIndex], currentIndex, currentSection);
}

// Function to navigate to the next content within the same section
function showNext() {
    var contents = document.querySelectorAll(`#${currentSection} img, #${currentSection} video`);
    currentIndex = (currentIndex + 1) % contents.length;
    openModal(contents[currentIndex], currentIndex, currentSection);
}

// Add event listeners to navigation buttons
prevBtn.addEventListener("click", showPrev);
nextBtn.addEventListener("click", showNext);

// Add keyboard arrow functionality
document.addEventListener("keydown", function(event) {
    if (modal.style.display === "block") {
        if (event.key === "ArrowLeft") {
            showPrev();
        } else if (event.key === "ArrowRight") {
            showNext();
        }
    }
});