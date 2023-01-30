let bass = document.querySelector(".a");
let hihat = document.querySelector(".b");
let mediumtom = document.querySelector(".c");
let mediumtom2 = document.querySelector(".d");
let ride = document.querySelector(".e");
let smalltom = document.querySelector(".f");
let snare = document.querySelector(".g");
let splash = document.querySelector(".h");

document.addEventListener("keypress", (e) => {
    switch (e.key) {
        case "a":
            bassDrum();
            break;
        case "s":
            hiHit();
            break;
        case "d":
            mediumTom();
            break;
        case "f":
            mediumTom2();
            break;
        case "g":
            ride1();
            break;
        case "h":
            smallTom();
            break;
        case "j":
            snare1();
            break;
        case "k":
            splash1();
            break;
        default:
            break;
    }
})

bassDrum = () => {
    const audioBashDrum = new Audio("./asseset/audio/bash.mp3");
    return (audioBashDrum.play());
}
function hiHit() {
    const audiohiHit = new Audio("./asseset/audio/hithat.mp3");
    return (audiohiHit.play());
}
function mediumTom() {
    const audiomediumTom = new Audio("./asseset/audio/mediumtom.mp3");
    return (audiomediumTom.play());
}
function mediumTom2() {
    const audiomediumTom2 = new Audio("./asseset/audio/tom.mp3");
    return (audiomediumTom2.play());
}
function ride1() {
    const audioride = new Audio("./asseset/audio/ridecrash.mp3");
    return (audioride.play());
}
function smallTom() {
    const audioBashDrum = new Audio("./asseset/audio/smalltom.mp3");
    return (audioBashDrum.play());
}
function snare1() {
    const audioBashDrum = new Audio("./asseset/audio/snare.mp3");
    return (audioBashDrum.play());
}
function splash1() {
    const audioBashDrum = new Audio("./asseset/audio/splash.mp3");
    return (audioBashDrum.play());
}