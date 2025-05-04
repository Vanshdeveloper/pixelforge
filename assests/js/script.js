console.log("Working!!!!");


let closeNavBtn = document.getElementById('nav-close-btn');
let openNavBtn = document.getElementById('nav-open-btn');
let navOverlay =  document.getElementById('nav-overlay');
document.getElementById('nav-open-btn').addEventListener('click', () => {
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'block';
    navOverlay.style.display = 'flex';
})

document.getElementById('nav-close-btn').addEventListener('click', () => {
    openNavBtn.style.display = 'block';
    closeNavBtn.style.display = 'none';
    navOverlay.style.display = 'none';
})
