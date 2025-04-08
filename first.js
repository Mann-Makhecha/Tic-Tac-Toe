let boxes = document.querySelectorAll('.box');
let resetbtn = document.querySelector('#reset');
let newgamebtn = document.querySelector("#newgame");
let msgcontainr = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn_o = true;
const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box is clicked");
        if(turn_o){
            box.innerText = "O";
            turn_o = false;
        }
        else{
            box.innerText = "X";
            turn_o = true;
        }
        box.disabled = true;
        checkwin();
    
    });
});

const resetgame = () => {
    turn_o = true;
    enablebtns();
    msgcontainr.style.display = "none";
}
 
const disablebtns = () =>{
    for (let box of boxes){
        box.disabled = true;
    }
    }

 const enablebtns = () =>{
        for (let box of boxes){
            box.disabled = false;
            box.innerText = "";
        }
        }


const showwinner = (winner) => {
    msgcontainr.style.display = "block";
    msg.innerText = `${winner} is the winner`;
    disablebtns();
};

const showdraw = () => {
    msgcontainr.style.display = "block";
    msg.innerText = "It's a draw!";
    disablebtns();
};

const checkwin = () => {
    let isDraw = true; 

    for (let pattern of winpatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner", pos1val);
                showwinner(pos1val);
            }
        }
    }

    // Check if all boxes are filled
    boxes.forEach((box) => {
        if (box.innerText === "") {
            isDraw = false; // If any box is empty, it's not a draw
        }
    });

    if (isDraw) {
        console.log("It's a draw");
        showdraw(); // Call a function to handle the draw condition
    }
};

reset.addEventListener("click", resetgame);
newgamebtn.addEventListener("click", resetgame);