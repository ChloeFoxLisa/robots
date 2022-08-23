const image = document.querySelectorAll('.promo__left__audio__card__img');

const playing = [false, false, false]; // текущее состояние плеера

const player = []; 
player[0] = new Audio('./audio/promo-1.mp3');
player[1] = new Audio('./audio/promo-2.mp3');
player[2] = new Audio('./audio/promo-3.mp3');

for (let i = 0; i < 3; i++){
    player[i].preload = "auto";
}

for (let i = 0; i < 3; i++){
    player[i].addEventListener('ended', function () { // слушаем окончание трека
        image[i].src = "img/play.svg";
        playing[i] = false;
    });
}


for (let i = 0; i < 3; i++){
    image[i].addEventListener('click', function(){
        if (playing[i]) {
            player[i].pause();
            image[i].src = "img/play.svg";
        } else {
            for (let i = 0; i < 3; i++){
                player[i].pause();
                image[i].src = "img/play.svg";
                playing[i] = false;
            }
            player[i].play();
            image[i].src = "img/pause.svg";
        }
        playing[i] = !playing[i];    
    }); // слушаем нажатие на кнопку
}