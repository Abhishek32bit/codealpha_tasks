// Tab switching
const tabButtons = document.querySelectorAll(".tab-btn");
const sections = document.querySelectorAll(".tab-section");

tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Set active tab button
    tabButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    // Show correct section
    sections.forEach(section => {
      section.classList.remove("active");
      if (section.id === btn.dataset.tab) {
        section.classList.add("active");
      }
    });
  });
});

// FAB action
document.querySelector(".fab").addEventListener("click", () => {
  alert("Add button clicked!");
});

// Viewer logic
const images = document.querySelectorAll('.gallery img');
const viewer = document.getElementById('viewer');
const viewerImg = document.getElementById('viewer-img');
let currentIndex = 0;

images.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    showImage();
  });
});

function showImage() {
  viewerImg.src = images[currentIndex].src;
  viewer.style.display = 'flex';
}

function closeViewer() {
  viewer.style.display = 'none';
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
}
