var image = document.querySelector("img");
var video = document.querySelector("video");
var backbtn = document.querySelector(".fa-backward");
var nextbtn = document.querySelector(".fa-forward");
var playbtn = document.querySelector(".fa-play");
var pausebtn = document.querySelector(".fa-pause");
var sufflebtn = document.querySelector(".fa-suffle");
var volumebtn = document.querySelector("#volume");
var audiorange = document.querySelector("#audiorange");
var storage = [
    { videoSource: "./images/feeling_maleVersion.mp4"},
    { videoSource: "./images/Hari_Hari.mp4" },
    { videoSource: "./images/feeling_femaleVersion.mp4" },
    { videoSource: "./images/compition.mp4" },
    { videoSource: "./images/diljit_ hass-hass.mp4" }];

    var index=0;
    var realTime=0;
    pausebtn.style.display="none";

    function playfun(){
        video.src=storage[index].videoSource;
        video.currentTime=realTime;
        video.play();
        playbtn.style.display = "none"
        pausebtn.style.display = "block";
    }

    function pauseplay(){
        if (video.paused) {
            playfun();
        }
        else {
            video.pause();
            realTime = video.currentTime;
            playbtn.style.display = "block";
            pausebtn.style.display = "none"
    
        }
    }
    

    playbtn.addEventListener("click", pauseplay);   //() not be execute immediatly thats why we not use it
pausebtn.addEventListener("click", pauseplay);

nextbtn.addEventListener("click", function () {
    index = (index + 1) % storage.length;
    realTime = 0;
    playfun();
})

backbtn.addEventListener("click", () => {
    index = (index - 1 + storage.length) % storage.length;
    realTime = 0;
    playfun();
})

volumebtn.addEventListener("input", () => {
    video.volume = volumebtn.value;
})

video.addEventListener("ended", () => {
    index = (index + 1) % storage.length;
    realTime = 0;
    playfun();
})


