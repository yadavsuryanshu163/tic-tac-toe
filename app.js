let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let msg = document.querySelector("#msg"); 

let turnO = true; // player O starts

const winPatterns = [
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
        if (turnO) {
            box.innerText = "O";
            box.style.backgroundColor = "#a93b3bce";
            box.style.color = "black";
        } else {
            box.innerText = "X";
            box.style.backgroundColor = "#050505ce";
            box.style.color = "white";
        }
        box.style.fontSize = "40px";
        box.disabled = true;
        turnO = !turnO; // switch turn
        checkWin(); 
    });
});

const disableBoxes = () => {
    boxes.forEach((box) => box.disabled = true);
};

const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
        box.style.backgroundColor = ""; // reset styles
        box.style.color = "";
    });
};

const showWinner = (winner) => {
    alert(`🎉 Congratulations! Winner is ${winner}`);
    msg.innerText = `🎉 Congratulations! Winner is ${winner}`;
    turnO=false;
    disableBoxes();
};

const reset = () => {
    turnO = true;
    enableBoxes();
    msg.innerText = "";
};

const checkWin = () => {
    for (let patt of winPatterns) {
        let p1 = boxes[patt[0]].innerText;
        let p2 = boxes[patt[1]].innerText;
        let p3 = boxes[patt[2]].innerText;

        if (p1 !== "" && p1 === p2 && p2 === p3) {
            showWinner(p1);
        }
    }
};


resetBtn.addEventListener("click", reset);


