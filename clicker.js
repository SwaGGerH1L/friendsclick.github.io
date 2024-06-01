let score = 0;

document.getElementById('clickImage').addEventListener('click', function() {
    score++;
    document.getElementById('score').innerHTML = 'Score: ' + score + ' <img src="coin.png" alt="Coin">';
});