score = 0;
cross = true;
c = 0;

audio = new Audio('music.mp3');
audiogo = new Audio('gameover.mp3');
setTimeout(() => {
    audio.play()
}, 1000);
document.onkeydown = function (e) {
    console.log("Key code is: ", e.keyCode)
    if (e.keyCode == 38) {
        Basanti = document.querySelector('.Basanti');
        Basanti.classList.add('animateBasanti');
        setTimeout(() => {
            Basanti.classList.remove('animateBasanti')
        }, 700);
    }
    if (e.keyCode == 39) {
        Basanti = document.querySelector('.Basanti');
        BasantiX = parseInt(window.getComputedStyle(Basanti, null).getPropertyValue('left'));
        Basanti.style.left = BasantiX + 112 + "px";
    }
    if (e.keyCode == 37) {
        Basanti = document.querySelector('.Basanti');
        BasantiX = parseInt(window.getComputedStyle(Basanti, null).getPropertyValue('left'));
        Basanti.style.left = (BasantiX - 112) + "px";
    }
}

setInterval(() => {
    Basanti = document.querySelector('.Basanti');
    gameOver = document.querySelector('.gameOver');
    gabbar = document.querySelector('.gabbar');

    Bx = parseInt(window.getComputedStyle(Basanti, null).getPropertyValue('left'));
    By = parseInt(window.getComputedStyle(Basanti, null).getPropertyValue('top'));

    gx = parseInt(window.getComputedStyle(gabbar, null).getPropertyValue('left'));
    gy = parseInt(window.getComputedStyle(gabbar, null).getPropertyValue('top'));

    offsetX = Math.abs(Bx - gx);
    offsetY = Math.abs(By - gy);
    if (offsetX < 63 && offsetY < 52) {
        gameOver.style.color = "red";
        gameOver.innerHTML = "Game Over - Reload to Play Again"
        gabbar.classList.remove('gabbarAni')
        Basanti.classList.add('death')
        c=1;
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    }
    else if (offsetX < 145 && cross) {
        score += 1;
        if (c==1) {
            scoreCont.innerHTML = "Your Score: " + score
        } else {
            setTimeout(() => {
                aniDur = parseFloat(window.getComputedStyle(gabbar, null).getPropertyValue('animation-duration'));
                newDur = aniDur - 0.1;
                gabbar.style.animationDuration = newDur + 's';
            }, 500);
    
            updateScore(score);
            
        }
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
       
    }

}, 10);

function updateScore(score) {
    scoreCont.innerHTML = "Your Score: " + score
}