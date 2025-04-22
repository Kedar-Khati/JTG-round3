const overlap = document.getElementById('overlap-video');
const play = document.getElementById("play");
const video = document.getElementById('myVideo');

function toggle(){
    if(video.paused){
        video.play();
        play.style.display = 'none';
    }
    else{
        video.pause();
        play.style.display = 'block';
    }
}

overlap.addEventListener('click',toggle);