console.log("welcome to spotify");
let songIndex = 0;
let audioElement = new Audio('images/songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById('masterSongName');
let songs = [
    { songName: "Tip Tip Sooryavanshi", filePath: "images/songs/1.mp3", coverPath: "images/covers/1.jpg" },
    { songName: "Teri Mitti", filePath: "images/songs/2.mp3", coverPath: "images/covers/2.jpg" },
    { songName: "Tum Saason Mein", filePath: "images/songs/3.mp3", coverPath: "images/covers/3.jpg" },
    { songName: "Mahiyan Awarapan", filePath: "images/songs/4.mp3", coverPath: "images/covers/4.jpg" },
    { songName: "Musafir Jaane Wale", filePath: "images/songs/5.mp3", coverPath: "images/covers/5.jpg" },
    { songName: "Bhula Dena Mujhe", filePath: "images/songs/6.mp3", coverPath: "images/covers/6.jpg" },
    { songName: "chak De India", filePath: "images/songs/7.mp3", coverPath: "images/covers/7.jpg" },
    { songName: "Desh Rangeela", filePath: "images/songs/8.mp3", coverPath: "images/covers/8.jpg" },
    { songName: "Saiyaara Ek Tha Tiger", filePath: "images/songs/9.mp3", coverPath: "images/covers/9.jpg" },

];
// audioElement.play();

// handle play/push/click
masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        gif.style.opacity = "1";
        masterplay.classList.remove('fa-play-circle-o');
        masterplay.classList.add('fa-pause-circle-o');
    } else {
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle-o');
        masterplay.classList.add('fa-play-circle-o');
        gif.style.opacity = "0";
    }

});

// listen to events
audioElement.addEventListener('timeupdate', () => {
    // console.log("timeupdate");
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    // console.log("progress");
    myProgressBar.value = progress;
    console.log(myProgressBar.value);
});
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
    // console.log(audioElement.currentTime);
})
songItem.forEach((element, i) => {
    // console.log(element,i);

    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerHTML = songs[i].songName;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        console.log(element);
        element.classList.add('fa-play-circle-o');
        element.classList.remove('fa-pause-circle-o');

    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    // console.log(element);
    element.addEventListener('click', (e) => {
        // console.log(e);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-play-circle-o");
        e.target.classList.add("fa-pause-circle-o");
        masterSongName.innerHTML = songs[songIndex].songName;
        audioElement.src = `images/songs/${songIndex + 1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = "1";
        masterplay.classList.remove('fa-play-circle-o');
        masterplay.classList.add('fa-pause-circle-o');
    })
})
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 8) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = `images/songs/${songIndex + 1}.mp3`;
    masterSongName.innerHTML = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle-o');
    masterplay.classList.add('fa-pause-circle-o');
})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 8;
    } else {
        songIndex -= 1;
    }
    audioElement.src = `images/songs/${songIndex + 1}.mp3`;
    masterSongName.innerHTML = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle-o');
    masterplay.classList.add('fa-pause-circle-o');
})