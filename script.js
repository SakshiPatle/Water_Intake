let totalGlasses = 0;
const totalGlassesDisplay = document.getElementById('totalGlasses');
const addWaterBtn = document.getElementById('addWaterBtn');
const removeWaterBtn = document.getElementById('removeWaterBtn');

// Load total glasses from localStorage if available
if (localStorage.getItem('totalGlasses')) {
    totalGlasses = parseInt(localStorage.getItem('totalGlasses'));
    totalGlassesDisplay.textContent = totalGlasses;
}

// Event listener for add glass button
addWaterBtn.addEventListener('click', function() {
    totalGlasses++;
    totalGlassesDisplay.textContent = totalGlasses;
    localStorage.setItem('totalGlasses', totalGlasses);
});

// Event listener for remove glass button
removeWaterBtn.addEventListener('click', function() {
    if (totalGlasses > 0) {
        totalGlasses--;
        totalGlassesDisplay.textContent = totalGlasses;
        localStorage.setItem('totalGlasses', totalGlasses);
    }
});



document.addEventListener("DOMContentLoaded", function() {
    flatpickr("#calendar-input", {
        defaultDate: "today",
        clickOpens: true
    });
});


function changeImage(newImageSrc, imgId) {
var imgElement = document.getElementById(imgId);
if (imgElement) {
imgElement.src = newImageSrc;
}
}

function toggleSearch() {
var searchInput = document.getElementById('searchInput');
searchInput.style.display = (searchInput.style.display === 'none' || searchInput.style.display === '') ? 'block' : 'none';

// If you want to focus on the input when it's displayed, uncomment the line below:
// if (searchInput.style.display === 'block') searchInput.focus();
}