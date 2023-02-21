function moverPosicionRandom(elm) {
    elm.style.position = 'absolute';
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px';
}

let btnSi = document.getElementById('btnSi');
let btnNo = document.getElementById('btnNo');

btnSi.addEventListener( 'click', () => {
    Swal.fire({
        title: 'Yo tambien te amo cariño <3',
        html: '<img style="width: 300px;" src="./pictures/giphy.gif"></img>'
    })
})

btnNo.addEventListener( 'click', (e) => {
    moverPosicionRandom(e.target)
})