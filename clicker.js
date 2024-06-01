let score = 0;

document.getElementById('clickImage').addEventListener('click', function() {
    score++;
    document.getElementById('score').innerHTML = 'Score: ' + score + ' <img src="coin.png" alt="Coin">';
});

// Предотвращение увеличения страницы при двойном нажатии на мобильных устройствах
let lastTouchEnd = 0;
document.addEventListener('touchend', function(event) {
    let now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);
