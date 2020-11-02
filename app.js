var wins = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],
    [0, 4, 8], [6, 4, 2], [2, 5, 8],
    [1, 4, 7], [0, 3, 6]
];

var options=['X','O'];
var player=[];
player[0]="player1";
player[1]="player2";
var turn=0;

var getCells=document.querySelectorAll(".cell");




// add listner for each square 
// document.getElementById("game").addEventListener("click", add);

// function add() {
//     document.getElementById("0").innerHTML = "x";
//     // document.getElementById("1").innerHTML = "x";
//     // document.getElementById("2").innerHTML = "O";
// }

function startGame(){
    for(var i=0;i<getCells.length;i++){
        getCells[i].innerText='';
    }
}