let bass = document.querySelector(".a");
let hihat = document.querySelector(".b");
let mediumtom = document.querySelector(".c");
let mediumtom2 = document.querySelector(".d");
let ride = document.querySelector(".e");
let smalltom = document.querySelector(".f");
let snare = document.querySelector(".g");
let splash = document.querySelector(".h");

bass.addEventListener('click',()=>console.log(1212));
bassDrum = (e) => {
    const audioBashDrum = new Audio("./asseset/audio/bash.mp3");
    if (e.key == 'z') {
        audioBashDrum.play();
        bass.click();
    }
}
function hiHit() {
    const audiohiHit = new Audio("./asseset/audio/hithat.mp3");
    audiohiHit.play();
}
function mediumTom() {
    const audiomediumTom = new Audio("./asseset/audio/mediumtom.mp3");
    audiomediumTom.play();
}
function mediumTom2() {
    const audiomediumTom2 = new Audio("./asseset/audio/tom.mp3");
    audiomediumTom2.play();
}
function ride1() {
    const audioride = new Audio("./asseset/audio/ridecrash.mp3");
    audioride.play();
}
function smallTom() {
    const audioBashDrum = new Audio("./asseset/audio/smalltom.mp3");
    audioBashDrum.play();
}
function snare1() {
    const audioBashDrum = new Audio("./asseset/audio/snare.mp3");
    audioBashDrum.play();
}
function splash1() {
    const audioBashDrum = new Audio("./asseset/audio/splash.mp3");
    audioBashDrum.play();
}