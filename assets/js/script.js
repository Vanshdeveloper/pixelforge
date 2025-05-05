

// Function to open navbar
let closeNavBtn = document.getElementById('nav-close-btn');
let openNavBtn = document.getElementById('nav-open-btn');
let navOverlay =  document.getElementById('nav-overlay');
document.getElementById('nav-open-btn').addEventListener('click', () => {
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'block';
    navOverlay.style.display = 'flex';
})


// Function to close navbar
document.getElementById('nav-close-btn').addEventListener('click', () => {
    openNavBtn.style.display = 'block';
    closeNavBtn.style.display = 'none';
    navOverlay.style.display = 'none';
})


// Function to close navbar on click of any link
document.querySelectorAll('a').forEach((aItem) => {
    aItem.addEventListener('click', () => {
        openNavBtn.style.display = 'block';
        closeNavBtn.style.display = 'none';
        navOverlay.style.display = 'none';
    })
})


