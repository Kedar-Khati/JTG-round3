
const video = document.getElementById('myVideo');
const playButton = document.getElementById('playButton');

function togglePlay() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

video.addEventListener('pause', () => {
    playButton.style.display = 'block';
});

video.addEventListener('play', () => {
    playButton.style.display = 'none';
});

video.addEventListener('click', togglePlay);

