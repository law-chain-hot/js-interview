

let docNode = document.querySelector('body')
let maskNode = document.createElement('div');
maskNode.className = 'mask';
docNode.insertAdjacentElement("beforeend", maskNode);

function setMask(el) {


    // 1. get the value of element
    let offsetWidth = el.offsetWidth;
    let offsetHeight = el.offsetHeight;
    let offsetLeft = el.offsetLeft;
    let offsetTop = el.offsetTop;
    let offsetRight = el.offsetRight;
    let offsetBottom = el.offsetBottom;
    console.log(offsetWidth, offsetHeight)

    // 2. get the value of screen
    let screenWidth = docNode.scrollWidth;
    let screenHeight = docNode.scrollHeight;
    console.log(screenWidth, screenHeight)

    // 3.1 set mask
    // maskNode.style.zIndex = "900";
    maskNode.style.backgroundColor = "rgba(0, 0, 0, 0)";
    maskNode.style.borderColor = "rgba(0, 0, 0, 0.5)";
    maskNode.style.borderStyle = 'solid';
    maskNode.style.position = "absolute";
    maskNode.style.left = 0;
    maskNode.style.top = 0;

    // 3.2 
    maskNode.style.width = '100vw';
    maskNode.style.height = '100vh';
    maskNode.style.left = 0;
    maskNode.style.right = 0;

    // 3.3 border
    maskNode.style.borderLeft = offsetLeft + "px";
    maskNode.style.borderTop = offsetTop + "px";
    maskNode.style.borderRight= screenWidth - offsetWidth - offsetLeft + "px";
    maskNode.style.borderBottom= screenHeight - offsetHeight - offsetTop + "px";




}

let el = document.querySelector('h1')
setMask(el)