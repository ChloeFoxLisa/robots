const imageBrast = document.querySelectorAll('.Brast');

const playingBrast = [false, false, false]; // текущее состояние плеера

const playerBrast = []; 
playerBrast[0] = new Audio('./audio/brast-1.mp3');
playerBrast[1] = new Audio('./audio/brast-2.mp3');
playerBrast[2] = new Audio('./audio/brast-3.mp3');

for (let i = 0; i < 3; i++){
    playerBrast[i].preload = "auto";
}

for (let i = 0; i < 3; i++){
    playerBrast[i].addEventListener('ended', function () { // слушаем окончание трека
        imageBrast[i].src = "./img/playCard.svg";
        playingBrast[i] = false;
    });
}


for (let i = 0; i < 3; i++){
    imageBrast[i].addEventListener('click', function(){
        if (playingBrast[i]) {
            playerBrast[i].pause();
            imageBrast[i].src = "./img/playCard.svg";
        } else {
            for (let i = 0; i < 3; i++){
                playerBrast[i].pause();
                imageBrast[i].src = "./img/playCard.svg";
                playingBrast[i] = false;
            }
            playerBrast[i].play();
            imageBrast[i].src = "./img/pauseCard.svg";
        }
        playingBrast[i] = !playingBrast[i];    
    }); // слушаем нажатие на кнопку
}