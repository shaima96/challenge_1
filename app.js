
var turn = true;
document.getElementById('game').addEventListener('click', (e) => {

    ////// gets the element 
    var res = e.target;
    console.log(res)

    var playerX = document.createTextNode('X');
    var playerO = document.createTextNode('O');

    if (turn) {
        res.appendChild(playerX);
        res.classList.add('playerX')
        turn = !turn;
    }
    else {

        res.appendChild(playerO);
        res.classList.add('playerO')
        turn = !turn;
    }
})


