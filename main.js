const images = [
    "./images/dice-1.svg",
    "./images/dice-2.svg",
    "./images/dice-3.svg",
    "./images/dice-4.svg",
    "./images/dice-5.svg",
    "./images/dice-6.svg",
]
let button = document.querySelector("button");//getElementByTagName does not work to add a eventListener
let img = document.querySelectorAll("img");
img[0].src = images[0];
img[1].src = images[1];

const shake = new Audio("./sounds/shake.mp3");
const roll = new Audio("./sounds/roll.mp3");

button.addEventListener("click", function () {
    shake.play();

    intervalHandle = setInterval(function () {
        img[0].src = images[(Math.ceil(Math.random() * 6) - 1)];
        img[1].src = images[(Math.ceil(Math.random() * 6) - 1)];
    }, 80);

    setTimeout(function () {
        roll.play();
        clearInterval(intervalHandle);
    }, 3000);
})




