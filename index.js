
const navList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-link');
const mainBackground = document.querySelector('.main-background');
const bird = document.querySelector('.logo');



const pause = document.querySelector('.pause');
const play = document.querySelector('.play');
const audioBtn = document.querySelector('.audio-button');



let isPlay = false;
const audio = new Audio();
audio.src = 'assets/audio/forest.mp3'



audioBtn.addEventListener('click', playSong);
navList.addEventListener('click', changeImg);
bird.addEventListener('click', forest);



// birds start

    function forest (){
        stopSong();
        audio.src = 'assets/audio/forest.mp3'
        playSong()

        navLinks.forEach((btn) => btn.classList.remove('nav-active'));
        bird.classList.add('nav-active');
    }



    function changeImg(event) {
        if (event.target.classList.contains('Nightingale')){
            stopSong();
            audio.src = 'assets/audio/1.mp3'
            playSong()
            
            mainBackground.style.backgroundImage = "url(assets/1.jpg)";
            navLinks.forEach((btn) => btn.classList.remove('nav-active'));
            event.target.classList.add('nav-active');
        }

        else if (event.target.classList.contains('Thrush')){
            stopSong();
            audio.src = 'assets/audio/2.mp3'
            playSong()

            mainBackground.style.backgroundImage = "url(assets/2.jpg)";
            navLinks.forEach((btn) => btn.classList.remove('nav-active'));
            event.target.classList.add('nav-active');
        }

        else if (event.target.classList.contains('Robin')){
            stopSong();
            audio.src = 'assets/audio/3.mp3'
            playSong()

            mainBackground.style.backgroundImage = "url(assets/3.jpg)";
            navLinks.forEach((btn) => btn.classList.remove('nav-active'));
            event.target.classList.add('nav-active');
        }

        else if (event.target.classList.contains('Skylark')){
            stopSong();
            audio.src = 'assets/audio/4.mp3'
            playSong()

            mainBackground.style.backgroundImage = "url(assets/4.jpg)";
            navLinks.forEach((btn) => btn.classList.remove('nav-active'));
            event.target.classList.add('nav-active');
        }

        else if (event.target.classList.contains('White-throat')){
            stopSong();
            audio.src = 'assets/audio/5.mp3'
            playSong()

            mainBackground.style.backgroundImage = "url(assets/5.jpg)";
            navLinks.forEach((btn) => btn.classList.remove('nav-active'));
            event.target.classList.add('nav-active');
        }
    }


// birds end



// audio-btn start


function playSong() {
    if (!isPlay) {
        audio.play()
        audioBtn.classList.add('pause')
        isPlay = !isPlay
    }
    else {
        audio.pause()
        audio.currentTime = 0
        audioBtn.classList.remove('pause')
        isPlay = !isPlay
    }

}

function stopSong() {
    audio.pause()
    audioBtn.classList.remove('pause')
    isPlay = false
    audio.currentTime = 0
}





// audio-btn end
