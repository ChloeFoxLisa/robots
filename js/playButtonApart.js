const imageApart = document.querySelectorAll('.Apart');

const playingApart = [false, false, false]; // текущее состояние плеера

const playerApart = []; 
playerApart[0] = new Audio('./audio/apart-1.wav');
playerApart[1] = new Audio('./audio/apart-2.mp3');
playerApart[2] = new Audio('./audio/apart-3.mp3');

for (let i = 0; i < 3; i++){
    playerApart[i].preload = "auto";
}

for (let i = 0; i < 3; i++){
    playerApart[i].addEventListener('ended', function () { // слушаем окончание трека
        imageApart[i].src = "./img/playCard.svg";
        playingApart[i] = false;
    });
}


for (let i = 0; i < 3; i++){
    imageApart[i].addEventListener('click', function(){
        if (playingApart[i]) {
            playerApart[i].pause();
            imageApart[i].src = "./img/playCard.svg";
        } else {
            for (let i = 0; i < 3; i++){
                playerApart[i].pause();
                imageApart[i].src = "./img/playCard.svg";
                playingApart[i] = false;
            }
            playerApart[i].play();
            imageApart[i].src = "./img/pauseCard.svg";
        }
        playingApart[i] = !playingApart[i];    
    }); // слушаем нажатие на кнопку
}