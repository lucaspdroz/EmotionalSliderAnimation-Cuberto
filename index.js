const objImages = {
    rage: "assets/Rage.svg",
    ok: "assets/Ok.svg",
    happy: "assets/Happy.svg",
}

const DomObjects = {
    body: document.body,
    rangeId: document.querySelector('#rangeId'),
    imgFace: document.querySelector('.face'),
    rangeText: document.querySelector('#rangeText')
}

const { body, rangeId, imgFace, rangeText } = DomObjects
const { rage, ok, happy } = objImages

const setupFaces = () => {
    // Sets or Resets to a default value if refreshes
    rangeId.classList.add("ok");
    changeFace(ok, "Ok", "#FEEEBD")
    rangeId.value = 2
}

const changeFace = (img, text, bgColor) => {
    console.log({ img, text, bgColor });
    rangeText.innerHTML = text
    imgFace.src = img;
    body.style.backgroundColor = bgColor
    rangeId.classList.remove(...rangeId.classList);
}

rangeId.addEventListener('input', () => {
    switch (parseInt(rangeId.value)) {
        case 1:
            changeFace(rage, "Nope", "#FF9BE1")
            break;
        case 2:
            changeFace(ok, "Ok", "#FEEEBD")
            break;
        case 3:
            changeFace(happy, "Good", "#BDFDE5")
            break;
    }
})

setupFaces();