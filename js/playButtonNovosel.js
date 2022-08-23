const imageNovosel = document.querySelectorAll('.Novosel');

const playingNovosel = [false, false, false]; // текущее состояние плеера

const playerNovosel = []; 
playerNovosel[0] = new Audio('./audio/novosel-1.mp3');
playerNovosel[1] = new Audio('./audio/novosel-2.mp3');
playerNovosel[2] = new Audio('./audio/novosel-3.mp3');

for (let i = 0; i < 3; i++){
    playerNovosel[i].preload = "auto";
}

for (let i = 0; i < 3; i++){
    playerNovosel[i].addEventListener('ended', function () { // слушаем окончание трека
        imageNovosel[i].src = "./img/playCard.svg";
        playingNovosel[i] = false;
    });
}


for (let i = 0; i < 3; i++){
    imageNovosel[i].addEventListener('click', function(){
        if (playingNovosel[i]) {
            playerNovosel[i].pause();
            imageNovosel[i].src = "./img/playCard.svg";
        } else {
            for (let i = 0; i < 3; i++){
                playerNovosel[i].pause();
                imageNovosel[i].src = "./img/playCard.svg";
                playingNovosel[i] = false;
            }
            playerNovosel[i].play();
            imageNovosel[i].src = "./img/pauseCard.svg";
        }
        playingNovosel[i] = !playingNovosel[i];    
    }); // слушаем нажатие на кнопку
}