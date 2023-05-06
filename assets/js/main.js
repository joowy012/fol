let nav = document.getElementById('nav');
let opened = false;
let prevH = nav.style.height;
nav.addEventListener('click', function() {
    abrir();
});
let hamb = document.getElementById('hamb');
hamb.addEventListener('click', function() {

    abrir();

})

function abrir() {
    if (window.innerWidth <= 500) {
        if (!opened) {
            hamb.style.display = 'none';
            console.log('abierto');
            nav.style.height = "100vh";
            console.log(nav.children);
            for (let i = 0; i < nav.children.length; i++) {
                nav.children[i].children[0].style.display = 'block';
            }
            opened = true;
        } else {
            hamb.style.display = 'block';
            for (let i = 0; i < nav.children.length; i++) {
                nav.children[i].children[0].style.display = 'none';
            }
            console.log('cerrado');
            nav.style.height = prevH;
            opened = false;
        }
    }
    return
};
