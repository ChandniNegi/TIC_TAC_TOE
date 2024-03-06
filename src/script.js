// ---- START-----
let boxes=document.querySelectorAll(".box")
let resetbtn=document.querySelector("#reset-btn")
let msgContainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg")

let turnO=true

// 1 step
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

// 2 step and 8
 boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        // console.log("yess")
       if(turnO){
             box.innerText="O"
           turnO=false
        }else{
            box.innerText="X"
            turnO=true
        }
        box.disabled=true
        checkWinner()

        // 8 step
           // After the player's move, check if the game is still active
           if (!checkWinner()) {
            // If the game is still active, make the computer's move
            makeComputerMove();
            if (!checkWinner()) {
                turnO = true; // Toggle turnO after the computer's move
            }
        }
     })
 });



// 4 step
const showWinner=(winner)=>{
    msg.innerText=`congo winner is ${winner}`
    msgContainer.classList.remove("hide")
    disableBoxes()
}

// 5 step
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true
    }
}

// 6 step
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false
        box.innerText=""
    }
}



 // 7 step
 const makeComputerMove = () => {
    const emptyBoxes = Array.from(boxes).filter((box) => !box.innerText);
    const randomIndex = Math.floor(Math.random() * emptyBoxes.length);
    // math.random give-------0.1------to-----0.9
    emptyBoxes[randomIndex].innerText = "X";
    emptyBoxes[randomIndex].disabled = true;
  };


// 3 step
const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText
        let pos2Val=boxes[pattern[1]].innerText
        let pos3Val=boxes[pattern[2]].innerText

        if(pos1Val!=""&&pos2Val!=""&&pos3Val!=""){
            if(pos1Val===pos2Val&&pos2Val===pos3Val){
                showWinner(pos1Val)
                return true
            }
        }
    }

    // 9 step
      // Check for a draw
  const isDraw = Array.from(boxes).every((box) => box.innerText);
  if (isDraw) {
    gameDraw();
    return true;
  }

  return false;

}
//  10 step
const gameDraw=()=>{
    msg.innerText="game draw"
    msgContainer.classList.remove("hide")
    disableBoxes()
}

// 11 step
const resetGame=()=>{
    turnO=true
    count=0
    enableBoxes()
    msgContainer.classList.add("hide")
}


resetbtn.addEventListener("click",resetGame)






