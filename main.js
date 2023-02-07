blackbuton.onclick = function() {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    document.getElementById('menuHome').style.color = 'white';
    document.getElementById('menuService').style.color = 'white';
    document.getElementById('menuTeams').style.color = 'white';
    document.getElementById('menuContact').style.color = 'white';
}
whitebuton.onclick = function() {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    document.getElementById('menuHome').style.color = 'black';
    document.getElementById('menuService').style.color = 'black';
    document.getElementById('menuTeams').style.color = 'black';
    document.getElementById('menuContact').style.color = 'black';
}

let clik_mouse_foto = 0;

function clicMouseImg() {
    if (clik_mouse_foto === 0) {
        document.getElementById('clikImg').style.display = 'flex';
        document.getElementById('menu').style.filter = 'blur(3px)';
        document.getElementById('colorText').style.filter = 'blur(3px)';
        clik_mouse_foto = 1;
    } else if (clik_mouse_foto === 1) {
        document.getElementById('clikImg').style.display = 'none';
        document.getElementById('menu').style.filter = 'blur(0)';
        document.getElementById('colorText').style.filter = 'blur(0)';
        clik_mouse_foto = 0;
    }
}
let clik_mouse = 0;

function circlesApp() {
    if (clik_mouse === 0) {
        document.getElementById('clickKolo').style.display = 'flex';
        clik_mouse = 1;
    } else if (clik_mouse === 1) {
        document.getElementById('clickKolo').style.display = 'none';
        clik_mouse = 0;
    }
}

function randBg() {
    const randColor = Math.floor(Math.random() * 2423).toString();
    document.body.style.backgroundColor = '#' + randColor;
}

function colorRed() {
    document.getElementById('colorText').style.color = 'red';
}

function colorGreen() {
    document.getElementById('colorText').style.color = 'green';
}

function colorBlue() {
    document.getElementById('colorText').style.color = 'blue';
}

function colorBlack() {
    document.getElementById('colorText').style.color = 'black';
}

function colorGold() {
    document.getElementById('colorText').style.color = 'gold';
}

function colorGray() {
    document.getElementById('colorText').style.color = 'gray';
}