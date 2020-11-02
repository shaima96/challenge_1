
var wins = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [2, 4, 6], [0, 4, 8]
];


var turn = true;
var playerX = [];
var playerO = [];
var result = document.getElementById('result');
var final = document.getElementById('final');


document.getElementById('game').addEventListener('click', (e) => {
    var res = e.target;
    var playerX = document.createTextNode('X');
    var playerO = document.createTextNode('O');


    if (playerX.length + playerO.length === 9) {
        result.innerHTML = " Not allow any additional plays";
    }

    if (turn) {
        res.appendChild(playerX);
        res.classList.add('playerX')
        result.innerHTML = "Player O turn";
        // if (wins) {
        //     console.log("Player X won the game")
        // }
        turn = !turn;
    }
    else {
        res.appendChild(playerO);
        res.classList.add('playerO')
        result.innerHTML = "Player X turn";
        // if (wins) {
        //     console.log("Player O won the game ")
        // }
        turn = !turn;
    }

    // for(var i=0;i<wins.length;i++){
    if (playerX.includes(wins[i][0]) && playerX.includes(wins[i][1]) && playerX.includes(wins[i][2])) {
        if (final.innerHTML != "Player X won the game") {
            final.innerHTML = "Player O won the game"
        }
        if (playerO.includes(wins[i][0]) && playerO.includes(wins[i][1]) && playerO.includes(wins[i][2])) {
            if (final.innerHTML != "Player O won the game") {
                final.innerHTML = "Player X won the game"
            }
        }
    }


    // var wins=(gamer)=>{
    //     if(res('0'.contains(gamer)) && res('1'.contains(gamer))&& res('2'.contains(gamer))){
    //         return true;
    //     }
    // }

})

