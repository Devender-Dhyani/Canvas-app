const facebtn = document.getElementById("button-face-plate")
const faceImg = document.getElementById("face-plate")
facebtn.oninput = () => {
    faceImg.style.fill = facebtn.value;
}

const helmbtn = document.getElementById("button-helmet")
const helmet = document.getElementById("helmet")
helmbtn.oninput = () => {
    helmet.style.fill = helmbtn.value;
}

const eyebtn = document.getElementById("button-eyes")
const eyes = document.getElementById("eyes")
eyebtn.oninput = () => {
    eyes.style.fill = eyebtn.value;
}

const backbtn = document.getElementById("button-background")
const backcolor = document.getElementById("background")
backbtn.oninput = () => {
    backcolor.style.fill = backbtn.value;
}