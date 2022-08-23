let bg1 = document.querySelector('.parallax1');

window.addEventListener('mousemove', function (e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    bg1.style.transform = 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)';
});

let bg2 = document.querySelector('.parallax2');

window.addEventListener('mousemove', function (e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    bg2.style.transform = 'translate(+' + x * 30 + 'px, +' + y * 30 + 'px)';
});