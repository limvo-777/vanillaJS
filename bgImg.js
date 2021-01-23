
const body = document.querySelector("body");
const IMG_NB = 3;

function getRandNum(){
    const RN = Math.ceil(Math.random()*IMG_NB);
    return RN;
}

function paintImg(num){
    const image = new Image();
    image.src = `images/${num}.jpg`;
    image.classList.add("bgImg");
    body.prepend(image);
}

function init() {
    const randnum = getRandNum();
    paintImg(randnum);

}


init();